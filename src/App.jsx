import React from 'react'
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import NavBar from './components/NavBar.jsx';
import { FeatureCard } from './sections/FeatureCard.jsx';
import LogoSection from './components/logoSection.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import TechStack from './sections/TechStack.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/contact.jsx';
import Footer from './sections/Footer.jsx';


const App = () => {
    return (
       <>
       <NavBar />
       < Hero />
       <ShowcaseSection />
       <LogoSection />
        <FeatureCard/>
        <ExperienceSection/>
        <TechStack/>
        <Testimonials/>
        <Contact/>
        <Footer/>
       </>
    )
}
export default App


