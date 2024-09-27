import React from "react";

function SearchBar() {
    return (
        <form className="flex overflow-hidden flex-col justify-center items-start self-stretch px-7 text-4xl text-white border border-white border-solid font-[275] min-w-[240px] rounded-[73px] w-[610px] h-[80px] max-md:w-full max-md:h-[60px] max-md:px-5 max-md:text-2xl">
            <div className="flex gap-4 items-center">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d474c327333a01c6c8777a3ddfb5c9f16b8166c172f673ffe8769b01a9c0815?placeholderIfAbsent=true&apiKey=1b800a32eafa4ceda4739330db92f3bd"
                    className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square max-md:w-8"
                    alt=""
                />
                <label htmlFor="searchInput" className="sr-only">Search</label>
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search"
                    className="self-stretch my-auto bg-transparent border-none outline-none text-white placeholder-white"
                />
            </div>
        </form>
    );
}

export default SearchBar;
