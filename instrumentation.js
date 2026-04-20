import { isProposalAuthConfigured } from "./lib/proposal-auth";

export async function register() {
  if (process.env.NODE_ENV !== "development") return;
  if (isProposalAuthConfigured()) return;
  // eslint-disable-next-line no-console
  console.warn("[proposal-auth] PROPOSAL_USER and PROPOSAL_PASS are missing. Deck is currently public.");
}
