import '../assets/styles/about.css';
import ConceptInnovations from './ConceptInnovations';
import FocusArea from './focusarea';
import Portfolio from './portfolio';
import ServiceModel from './servicemodel';
import Services from './services';
import Testimonial from './testimonial';
import CoFounder from './co-founders';
import Program from './program';

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
        </div>
    );
  }
  