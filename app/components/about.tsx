import '../assets/styles/about.css';
import FocusArea from './focusarea';
import Services from './services';
import Testimonial from './testimonial';

export default function About() {
    return (
        <div className="main pt-16 ">
           <Testimonial/>
           <Services/>
           <FocusArea/>
        </div>
    );
  }
  