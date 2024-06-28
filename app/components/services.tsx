import '../assets/styles/about.css';
import Testimonial from './testimonial';

export default function Services() {
    return (
        <section className="py-main md:px-44 px-14 rounded-2xl">
      <div className="container mx-auto  text-center">
        <h2 className="text-4xll g-color font-semibold mb-8">Network of builders helping <br /> startup scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white rounded-lg shadow-sm p-6 ">
            <h3 className="text-2xl font-semibold mb-4">Work with Service Incubators to expedite your time-to-market</h3>
            <p className="g-2 mb-4">
              Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.
            </p>
            <p className="g-2 mb-4 font-bold">
              For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.
            </p>
            <a href="#" className="font-semibold text-lg"><span className='underline mr-1'>Learn More</span>  &rarr;</a>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold mb-4">Access funding after your MVP is validated</h3>
            <p className="g-2 mb-4">
              Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
            </p>
            <p className="g-2 mb-4 font-bold">
              Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months.
            </p>
            <a href="#" className="font-semibold text-lg"><span className='underline mr-1'>Learn More</span>  &rarr;</a>
          </div>
        </div>
      </div>
    </section>
    );
  }
  