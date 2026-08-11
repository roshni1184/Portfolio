import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CustomCursor from "../components/CustomCursor";

export default function MainLayout({ children }) {
  return (
    <div className="relative bg-background min-h-screen text-white font-poppins selection:bg-primary/40">
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
