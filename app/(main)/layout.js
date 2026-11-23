import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
