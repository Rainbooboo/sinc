
export default function Program() {
    return (
        <section className="pb-12 pt-9  md:px-120px px-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xll g-color font-medium mb-4">Join Our Entrepreneur In Residence <br /> (EIR) Program</h2>
                <p className="g-2 mb-12 text-17px leading-67">Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and <br /> technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
            </div>
            <div className="flex flex-wrap justify-center space-x-0 md:space-x-5 space-y-4 md:space-y-0 mb-9">
                <div className="flex-1 max-w-sm bg-white text-black rounded-xl p-5 shadow-sm">
                    <div className="mb-5">
                        <div className="w-60px h-60px rounded-full bg-grey-2 flex justify-center items-center p-3"><img src="/img/app.png" alt="SINC Partners" className="w-full h-full object-cover shadow-lg"/></div>
                    </div>
                    <p className="font-medium text-g-color text-xl mb-3">Application and Selection</p>
                    <p className="text-grey-2 text-base">Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.</p>
                </div>
                <div className="flex-1 max-w-sm bg-white text-black rounded-xl p-5 shadow-sm">
                    <div className="mb-5">
                        <div className="w-60px h-60px rounded-full bg-grey-2 flex justify-center items-center p-3"><img src="/img/together.png" alt="SINC Partners" className="w-full h-full object-cover shadow-lg"/></div>
                    </div>
                    <p className="font-medium text-g-color text-xl mb-3">Alignment Meeting and Proposal Submission</p>
                    <p className="text-grey-2 text-base">If your application stands out, we&apos;ll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.
                    Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.</p>
                </div>
                <div className="flex-1 max-w-sm bg-white text-black rounded-xl p-5 shadow-sm">
                    <div className="mb-5">
                        <div className="w-60px h-60px rounded-full bg-grey-2 flex justify-center items-center p-3"><img src="/img/write.png" alt="SINC Partners" className="w-full h-full object-cover shadow-lg"/></div>
                    </div>
                    <p className="font-medium text-g-color text-xl mb-3">Negotiation and Agreement</p>
                    <p className="text-grey-2 text-17px">Upon successful alignment and proposal review, we&apos;ll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.
                    Once terms are agreed upon, we&apos;ll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.</p>
                </div>
            </div>
            <div className="text-center mt-46">
                <a href="#" className="font-semibold "><span className='underline mr-1 text-grey-2'>Build your dream </span>  &rarr;</a>
            </div>
            <div className="flex justify-center gap-x-18 mt-46">
                <img src="/img/prev.png" alt="SINC Partners" className=" shadow-sm rounded-full" width={66} height={66}/>
                <img src="/img/next.png" alt="SINC Partners" className=" shadow-sm rounded-full" width={66} height={66}/>
            </div>
        </section>
    );
  }