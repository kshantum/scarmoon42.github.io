import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Login } from "../components/Login";
import { Footer } from "../components/Footer";

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Login onLogin={onLogin} />
      <Footer />
    </div>
  );
}
