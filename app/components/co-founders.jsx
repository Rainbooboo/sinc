
export default function CoFounders() {
    return (
        <section className="pb-12 pt-9  md:px-120px px-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xll g-color font-medium mb-4">Co-found With Us</h2>
                <p className="g-2 mb-12 text-17px line-height-67">We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed</p>
            </div>
            <div className="flex flex-wrap justify-center space-x-0 md:space-x-5 space-y-4 md:space-y-0 mb-9">
                <div className="flex-1 max-w-sm bg-white text-black rounded-xl p-5 pt-5 shadow-sm">
                    <div className="mb-5">
                        <div className="w-60px h-60px rounded-full bg-dark-grey flex justify-center items-center"><p className="font-medium text-white text-xl">1</p></div>
                    </div>
                    <p className="font-medium text-g-color text-xl mb-3">We Ideate</p>
                    <p className="text-grey-2 text-base">We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.</p>
                </div>
                <div className="flex-1 max-w-sm bg-white text-black rounded-xl p-5 pt-7 shadow-sm">
                    <div className="mb-5">
                        <div className="w-60px h-60px rounded-full bg-lg-orange flex justify-center items-center"><p className="font-medium text-white text-xl">2</p></div>
                    </div>
                    <p className="font-medium text-g-color text-xl mb-3">You Validate</p>
                    <p className="text-grey-2 text-base">You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions </p>
                </div>
                <div className="flex-1 max-w-sm bg-white text-black rounded-xl p-5 pt-5 shadow-sm">
                    <div className="mb-5">
                        <div className="w-60px h-60px rounded-full bg-light-pink flex justify-center items-center"><p className="font-medium text-white text-xl">3</p></div>
                    </div>
                    <p className="font-medium text-g-color text-xl mb-3">You Co-Own</p>
                    <p className="text-grey-2 text-17px">After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.</p>
                </div>
            </div>
            <div className="text-center mt-46">
                <a href="#" className="font-semibold "><span className='underline mr-1 text-grey-2'>Build your dream </span>  &rarr;</a>
            </div>
        </section>
    );
  }