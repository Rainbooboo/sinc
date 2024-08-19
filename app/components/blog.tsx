
import Image from 'next/image';
export default function Blogs() {
    return (
      <section className="pb-12 md:px-120px px-20">
            <div className="text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xll g-color font-medium text-g-color mb-4">
                    Equity jobs
                    </h2>
                    <p className="g-2 mb-8 text-17px">See companies and startups offering equity or a mix of cash and equity for very important position in their company </p>
                </div>
            </div>
            {/* <!-- Video Section --> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* <!-- Video 1 --> */}
                <div className="relative">
                    <iframe className="w-full" height="214" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-base font-light flex justify-between items-center gap-2">Top Ten Most Powerful Startup <span><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="17px" fill="#FFFFFF"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg> </span> <span className="text-xs font-thin">2 Min</span></h3>
                    </div>
                </div>
                {/* <!-- Video 2 --> */}
                <div className="relative">
                    <iframe className="w-full" height="214" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-base font-light flex justify-between items-center gap-2">Top Ten Most Powerful Startup <span><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="17px" fill="#FFFFFF"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg> </span> <span className="text-xs font-thin">2 Min</span></h3>
                    </div>
                </div>
                {/* <!-- Video 3 --> */}
                <div className="relative">
                    <iframe className="w-full" height="214" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-base font-light flex justify-between items-center gap-2">Top Ten Most Powerful Startup <span><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="17px" fill="#FFFFFF"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg> </span> <span className="text-xs font-thin">2 Min</span></h3>
                    </div>
                </div>
            </div>

            {/* <!-- Blog Section --> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex">
                    <div>
                        <h4 className="text-lg font-semibold">Top Ten Most Powerful Startup</h4>
                        <p className="text-sm text-gray-600">Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
                    </div>
                    {/* <div className="w-16 h-20 bg-gray-300 mr-4"></div> */}
                    <Image src="/img/book.png" alt="Description" width={85} height={75} />
                </div>
                <div className="flex">
                    <div>
                        <h4 className="text-lg font-semibold">Top Ten Most Powerful Startup</h4>
                        <p className="text-sm text-gray-600">Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
                    </div>
                    {/* <div className="w-16 h-20 bg-gray-300 mr-4"></div> */}
                    <Image src="/img/book.png" alt="Description" width={85} height={65} />
                </div>
                <div className="flex">
                    <div>
                        <h4 className="text-lg font-semibold">Top Ten Most Powerful Startupkjkj</h4>
                        <p className="text-sm text-gray-600">Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
                    </div>
                    <Image src="/img/book.png" alt="Description" width={85} height={75} />
                </div>
            </div>
            <div className="text-center mt-46">
                <a href="#" className="font-semibold "><span className='underline mr-1'>See More Blogs & Resources</span></a>
            </div>
      </section>
    );
  }