import { ExpertHome } from "../components/ExpertHome";
import { Candidate } from "../types";

interface ExpertHomePageProps {
  candidate: Candidate | null;
  onNavigate: (page: string) => void;
  onBackToCandidates: () => void;
  onLogout: () => void;
}

export function ExpertHomePage({ candidate, onNavigate, onBackToCandidates, onLogout }: ExpertHomePageProps) {
  return (
    <ExpertHome
      candidate={candidate}
      onNavigate={onNavigate}
      onBackToCandidates={onBackToCandidates}
      onLogout={onLogout}
    />
  );
}