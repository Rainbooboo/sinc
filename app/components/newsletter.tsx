export default function Newsletter() {
    return (
        <div className="py-12">
          <div className=" px-120px">
                <h2 className="text-6xl font-medium mb-4">Newsletter</h2>
                <p className="text-base mb-6">Get the latest about SINC Partners, our startup Incubator program, Portfolio <br /> company offerings - straight into your inbox. </p>
                <div className="flex relative">
                    <input type="email" placeholder="Enter your email address"  className="p-3 rounded-full text-white bg-transparent border border-white md:w-2/5"/>
                    <button className="bg-white text-gray-900 px-6 p-3 rounded-full absolute left-80">Subscribe</button>
                </div>
          </div>
        </div>
    );
}