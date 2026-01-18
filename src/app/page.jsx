import Notice from "@/components/common/Notice";
import Banner from "@/components/layout/Banner";
import FeaturedCategories from "@/components/layout/FeaturedCategories";
import FeaturedProducts from "@/components/layout/FeaturedProducts";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServiceSection from "@/components/layout/ServiceSection";
import TechVibeNewsletter from "@/components/layout/TechVibeNewsletter";
import ClientStoreMap from "@/components/layout/ClientStoreMap";

const page = () => {
  return (
    <div className="mx-auto bg-gray-200">
      <Navbar></Navbar>
      <Banner></Banner>
      <Notice></Notice>
      <ServiceSection></ServiceSection>
      <FeaturedCategories></FeaturedCategories>
      <FeaturedProducts></FeaturedProducts>
      <ClientStoreMap></ClientStoreMap>
      <TechVibeNewsletter></TechVibeNewsletter>
      <Footer></Footer>
    </div>
  );
};

export default page;
