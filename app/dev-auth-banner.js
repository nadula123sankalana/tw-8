import { isProposalAuthConfigured } from "../lib/proposal-auth";

export default function DevAuthBanner() {
  if (process.env.NODE_ENV !== "development") return null;
  if (isProposalAuthConfigured()) return null;

  return (
    <div className="dev-auth-banner" role="note">
      Auth is not configured. Set `PROPOSAL_USER` and `PROPOSAL_PASS` in `.env.local` to protect this deck.
    </div>
  );
}
