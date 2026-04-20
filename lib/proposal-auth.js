const SESSION_COOKIE_NAME = "proposal_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;
const encoder = new TextEncoder();

function base64UrlEncode(input) {
  return Buffer.from(input).toString("base64url");
}

function base64UrlDecode(input) {
  return Buffer.from(input, "base64url").toString("utf8");
}

export function getProposalCredentials() {
  const user = (process.env.PROPOSAL_USER || "").trim();
  const pass = (process.env.PROPOSAL_PASS || "").trim();
  return { user, pass };
}

export function isProposalAuthConfigured() {
  const { user, pass } = getProposalCredentials();
  return Boolean(user && pass);
}

async function getSigningKey() {
  const secret = (process.env.PROPOSAL_SESSION_SECRET || "").trim();
  if (secret.length >= 16) return secret;
  const { user, pass } = getProposalCredentials();
  const bytes = encoder.encode(`${user}:${pass}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function sign(rawPayload) {
  const keyMaterial = await getSigningKey();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(keyMaterial),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(rawPayload));
  return Buffer.from(signature).toString("base64url");
}

export async function createProposalSessionValue() {
  const { user } = getProposalCredentials();
  const payload = {
    user,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  const encoded = base64UrlEncode(JSON.stringify(payload));
  const signature = await sign(encoded);
  return `${encoded}.${signature}`;
}

export async function verifyProposalSession(value) {
  try {
    if (!value || !value.includes(".")) return false;
    const [encoded, receivedSig] = value.split(".");
    if (!encoded || !receivedSig) return false;
    const expectedSig = await sign(encoded);
    if (receivedSig !== expectedSig) return false;

    const payload = JSON.parse(base64UrlDecode(encoded));
    if (!payload?.exp || typeof payload.exp !== "number") return false;
    if (payload.exp < Math.floor(Date.now() / 1000)) return false;

    const { user } = getProposalCredentials();
    if (!user || payload.user !== user) return false;
    return true;
  } catch {
    return false;
  }
}

export function areValidProposalCredentials(inputUser, inputPass) {
  const { user, pass } = getProposalCredentials();
  return Boolean(user && pass && inputUser === user && inputPass === pass);
}

export function parseBasicAuth(authHeader = "") {
  if (!authHeader?.startsWith("Basic ")) return null;
  try {
    const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf8");
    const separator = decoded.indexOf(":");
    if (separator < 0) return null;
    return {
      user: decoded.slice(0, separator),
      pass: decoded.slice(separator + 1),
    };
  } catch {
    return null;
  }
}

export function getSessionCookieName() {
  return SESSION_COOKIE_NAME;
}

export function getSessionTtlSeconds() {
  return SESSION_TTL_SECONDS;
}
