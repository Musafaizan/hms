
import './App.css';
import Header from"./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import ProblemSolution from "./components/ProblemSolution/page";
import Features from "./components/features/Features";
import Process from "./components/process/Process";
import whyUs  from "./components/why/whyUs"
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">   
     <>
     
     <Header/>
     <HeroSection/>
     <ProblemSolution/>
     <Features/>
     <Process/>
     <whyUs/>
     <Testimonials/>
     <Footer/>
     
     
     
     
     </>
    </div>
  );
}

export default App;
