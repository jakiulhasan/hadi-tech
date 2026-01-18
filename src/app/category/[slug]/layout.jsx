import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}
