import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import AboutProject from "./AboutProject";
import ClientTestimonials from "./ClientTestimonials";
import Hero from "./Hero";
import Projects from "./Projects";
import ProssessToDesign from "./ProssessToDesign";
import Skilles from "./Skilles";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <Hero />
        <Skilles />
        <ProssessToDesign />
        <Projects />
        <ClientTestimonials />
        <AboutProject />
      </div>
      <Footer />
    </>
  );
}

export default Home;
