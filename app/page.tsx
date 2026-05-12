import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import WhoIsFor from "../components/WhoIsFor";
import Courses from "../components/Courses"; // Naya Courses component import kiya
import LearningPath from "../components/LearningPath";
import ProjectsShowcase from "../components/ProjectsShowcase";
import Transformation from "../components/Transformation";
import Testimonials from "../components/Testimonials";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Offer from "../components/Offer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <IntroSection />
      <WhoIsFor />
      
      {/* Yahan naya Courses section add kar diya hai */}
      <Courses /> 
      
      <LearningPath />
      <ProjectsShowcase />
      <Transformation />
      <Testimonials />
      <Reviews />
      <FAQ />
      <Offer />
      <Footer />
    </main>
  );
}