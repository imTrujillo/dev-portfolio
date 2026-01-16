import { useEffect } from "react";
import { initLenis } from "../animations/lenis";
import LoadingOverlay from "../components/common/LoadingOverlay";
import Sidebar from "../components/navigation/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import useYearScroll from "../hooks/useYearScroll";
import YearDisplay from "../components/layout/YearDisplay";
import Skills from "./sections/Skills";
import Filter from "../components/common/Filter";
import Projects from "./sections/Projects";

const Home = () => {
  useEffect(() => {
    initLenis();
  }, []);

  useYearScroll();

  return (
    <>
      <LoadingOverlay />
      <Header />
      <Sidebar />
      <main className="w-full bg-black ring-8 ">
        <About />
        <div className="relative text-white">
          <Filter />
          <YearDisplay />
          <Education />
          <Experience />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
