import { ExpertCandidateSelection } from "../components/ExpertCandidateSelection";

interface ExpertCandidateSelectionPageProps {
  onComplete: (candidateId: string) => void;
  onLogout: () => void;
}

export function ExpertCandidateSelectionPage({ onComplete, onLogout }: ExpertCandidateSelectionPageProps) {
  return <ExpertCandidateSelection onComplete={onComplete} onLogout={onLogout} />;
}