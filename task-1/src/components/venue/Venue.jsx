import React from "react";
import SearchBar from "./SearchBar";
import LocationTags from "./LocationTag";

function Venue() {
    return (
        <main className="flex flex-col justify-center items-center mt-14 w-[1498px] h-[272px] max-md:mt-10 max-md:max-w-full max-md:px-4">
            {/* Back Button */}
            <button className="absolute hidden lg:block left-[102px] top-[198px] text-4xl font-bold text-center text-yellow-500 whitespace-nowrap max-md:text-2xl max-md:left-[20px] max-md:top-[150px]">
                Back
            </button>


            {/* Section Content */}
            <section className="flex flex-col grow shrink-0 items-center basis-0 w-fit max-md:max-w-full">
                <div className="flex flex-col items-center max-w-full text-white w-[899px] max-md:w-full mt-[120px] sm:mt-1">
                    {/* Title */}
                    <h1 className="w-full text-7xl text-center leading-none font-saiba max-md:text-4xl max-md:leading-snug">
                        Venues around you
                    </h1>

                    {/* Description */}
                    <p className="mt-3 text-2xl text-center leading-[60px] max-md:text-xl max-md:leading-normal max-md:mt-2">
                        Lorem ipsum dolor sit amet consectetur. Aliquam dignissim mauris velit.
                    </p>
                </div>

                {/* SearchBar and LocationTags */}
                <div className="flex gap-10 items-center mt-16 whitespace-nowrap max-md:mt-8 max-md:flex-col max-md:gap-6">
                    <SearchBar />
                    <LocationTags />
                </div>
            </section>
        </main>
    );
}

export default Venue;
