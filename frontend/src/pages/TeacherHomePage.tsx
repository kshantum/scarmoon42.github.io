import { TeacherHome } from "../components/TeacherHome";

interface TeacherHomePageProps {
  onNavigate: (page: "upload-umk" | "upload-pk" | "testing" | "student-checklist") => void;
  onLogout: () => void;
}

export function TeacherHomePage({ onNavigate, onLogout }: TeacherHomePageProps) {
  return <TeacherHome onNavigate={onNavigate} onLogout={onLogout} />;
}
