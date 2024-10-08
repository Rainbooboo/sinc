import '../assets/styles/about.css';
import ConceptInnovations from './ConceptInnovations';
import FocusArea from './focusarea';
import Portfolio from './portfolio';
import ServiceModel from './servicemodel';
import Services from './services';
import Testimonial from './testimonial';
import CoFounder from './co-founders';
import Program from './program';
import Investors from './investors';
import Jobs from './jobs';
import Blogs from './blog';
import Feature from './featuredIn';

export default function About() {
    return (
        <div className="main pt-16 ">
           <Testimonial/>
           <Services/>
           <FocusArea/>
           <ConceptInnovations/>
           <ServiceModel/>
           <Portfolio/>
           <CoFounder/>
           <Program/>
           <Investors/>
           <Jobs/>
           <Blogs/>
           <Feature/>
        </div>
    );
  }
  