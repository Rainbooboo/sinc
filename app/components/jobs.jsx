

export default function Jobs() {
    return (
      <section className="pb-12 md:px-120px px-20">
        <div className="text-center">
          <div className="container mx-auto">
            <h2 className="text-4xll g-color font-medium text-g-color mb-4">
              Equity jobs
            </h2>
            <p className="g-2 mb-8 text-17px">
              See companies and startups offering equity or a mix of cash and
              equity for very important position in their company
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {/* <!-- Card 1 --> */}
          <div class="bg-white rounded-xl shadow-sm p-5">
            <img src="/img/skimake.png" alt="Skimake Logo" class="mb-3" width={118.52} height={64}/>
            <p class="text-sm text-g-color mb-3">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <h3 class="text-lg font-medium text-g-color mb-4">
              Chief Executive Officer
            </h3>
            <div class="text-sm text-g-color mb-2">
              <div class="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">LOCATION</p>
                  <p className="">Abuja, Nigeria</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">INDUSTRY</p>
                  <p className="">On-demand print</p>
                </div>
              </div>
              <div class="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">EQUITY</p>
                  <p className="">1.2%</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">STIPEND</p>
                  <p className="">NGN 200,000/mth</p>
                </div>
              </div>
              <div class="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">DEADLINE</p>
                  <p className="">24th, January 2024</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">ROLE TYPE</p>
                  <p className="">Full-time</p>
                </div>
              </div>
            </div>
            <button className=" px-7 h-11 rounded-full btn-secondary text-white hover:bg-gray-900 w-full"> View Details </button>
          </div>
          {/* <!-- Card 2 --> */}
          <div class="bg-white rounded-xl shadow-sm p-5">
            <img src="/img/kreeca.png" alt="Kreeca Market Logo" class="mb-3" width={118.52} height={64}/>
            <p class="text-sm text-g-color mb-3">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <h3 class="text-lg font-medium text-g-color mb-4">UX Strategist</h3>
            <div className="text-sm text-g-color mb-5">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">LOCATION</p>
                  <p>Abuja, Nigeria</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">INDUSTRY</p>
                  <p>E-commerce</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">EQUITY</p>
                  <p>1.2%</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">STIPEND</p>
                  <p>NGN 200,000/mth</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">DEADLINE</p>
                  <p>24th, January 2024</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">ROLE TYPE</p>
                  <p>Full-time</p>
                </div>
              </div>
            </div>
            <button className=" px-7 h-11 rounded-full btn-secondary text-white hover:bg-gray-900 w-full"> View Details </button>
          </div>
          {/* 
        <!-- Card 3 --> */}
          <div class="bg-white rounded-xl shadow-sm p-5">
            <img src="/img/krowd.png" alt="Krowdback Logo" class="mb-3" width={118.52} height={64}/>
            <p class="text-sm text-g-color mb-3">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <h3 class="text-lg font-medium text-g-color mb-4">CTO&Head of innovations</h3>
            <div className="text-sm text-g-color mb-5">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">LOCATION</p>
                  <p>Abuja, Nigeria</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">INDUSTRY</p>
                  <p>Fintech</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">EQUITY</p>
                  <p>1.2%</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">STIPEND</p>
                  <p>NGN 200,000/mth</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">DEADLINE</p>
                  <p>24th, January 2024</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">ROLE TYPE</p>
                  <p>Full-time</p>
                </div>
              </div>
            </div>
            <button className=" px-7 h-11 rounded-full btn-secondary text-white hover:bg-gray-900 w-full"> View Details </button>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="bg-white rounded-xl shadow-sm p-5">
            <img src="/img/wettaa.png" alt="WETTAA LOGISTICS Logo" class="mb-3" width={118.52} height={64} />
            <p class="text-sm text-g-color mb-3">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <h3 class="text-lg font-medium text-g-color mb-4">
              Backend Developer
            </h3>
            <div className="text-sm text-g-color mb-5">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">LOCATION</p>
                  <p>Abuja, Nigeria</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">INDUSTRY</p>
                  <p>Transportation</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">EQUITY</p>
                  <p>1.2%</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">STIPEND</p>
                  <p>NGN 200,000/mth</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-grey-22 mb-1">DEADLINE</p>
                  <p>24th, January 2024</p>
                </div>
                <div className="text-end">
                  <p className="text-grey-22 mb-1">ROLE TYPE</p>
                  <p>Full-time</p>
                </div>
              </div>
            </div>
            <button className=" px-7 h-11 rounded-full btn-secondary text-white hover:bg-gray-900 w-full"> View Details </button>
          </div>
        </div>
        <div className="text-center mt-46">
                <a href="#" className="font-semibold "><span className='underline mr-1'>See More Equity Jobs</span>  &rarr;</a>
            </div>
      </section>
    );
  }