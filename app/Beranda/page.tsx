import Header from "@/components/commons/Header";
import Hero from "@/components/commons/Hero";
import Content from "@/components/commons/Content";
import Footer from "@/components/commons/Footer";

export default function page() {
  return (
    <div className="dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" relative z-20">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
