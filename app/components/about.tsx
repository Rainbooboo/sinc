import '../assets/styles/about.css';
import ConceptInnovations from './ConceptInnovations';
import FocusArea from './focusarea';
import ServiceModel from './servicemodel';
import Services from './services';
import Testimonial from './testimonial';

export default function About() {
    return (
        <div className="main pt-16 ">
           <Testimonial/>
           <Services/>
           <FocusArea/>
           <ConceptInnovations/>
           <ServiceModel/>
        </div>
    );
  }
  