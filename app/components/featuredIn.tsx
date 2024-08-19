import Call from "./call-to-join";


export default function Feature() {
    return (
        <section className="pb-12  ">
            <div className="text-center">
                <div className="container mx-auto">
                    <h2 className="text-2xl g-color font-medium text-g-color mb-12"> As Featured In</h2>
                </div>
            </div>
            <div className="flex md:w-879px mx-auto h-356px md:mb-10 mb-10">
                <div className="flex w-8/12 items-center justify-center text-left">
                    <img src="/image (3).png" alt="SINC Partners" className="w-full h-full object-cover shadow-lg" />
                </div>
                <div className=" w-4/12 flex flex-col md:text-left px-4 py-10 bg-white">
                    <img src="/img/buj.png" alt="" className="" height={30} width={71.67}/>
                    <p className="text-15 text-g-color my-3 font-medium">SINC Partners invests  over 200 million naira in 5 startups</p>
                    <p className="text-sm mb-6 text-grey-2">SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in .... </p>
                    <div className="text-grey-2">
                        <p className="text-13">REPORTED BY:</p>
                        <p className="text-15">Rema Viel</p>
                    </div>
                </div>
            </div>
            <Call/>
        </section>
    );
  }