import Hero from "./Components/HomePage/Hero/Hero";
import Bubble from "./Components/HomePage/Bubble/Bubble"
import Testimonials from "./Components/HomePage/Testimonials/Testimonials";
import FAQsSection from "./Components/HomePage/FAQsSection/FAQsSection";
import Services from "./Components/HomePage/Services/Services";
import Free from "./Components/HomePage/Free/Free";
import About from "./Components/HomePage/About/About";
import Contact from "./Components/Contact/Contact";
import Benifits from "./Components/Benifits/Benifits";

export default function Home() {
  return (
    <>
      {/* <Bubble /> */}
      <Hero />
      <Testimonials />
      <Benifits />
      <Free />
      <About />
      {/* <Services /> */}
      <FAQsSection />
      <Contact />
    </>
  );
}
