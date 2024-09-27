import React from "react";

function LocationTags() {
  const locations = ["Delhi", "Agra", "Mumbai", "Noida"];

  return (
    <div className="flex flex-wrap gap-3.5 items-center self-stretch my-auto text-[34px] font-semibold text-black min-w-[240px] max-md:text-2xl max-md:gap-2 max-md:my-4 max-md:px-4">
      {/* Left Image */}
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e8d1b15a165bb1d903deb3c303ecf5c9a9aa3ffcab0198d27e672be74e81744?placeholderIfAbsent=true&apiKey=1b800a32eafa4ceda4739330db92f3bd" 
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[35px] max-md:w-[25px]" 
        alt="" 
      />
      
      {/* Buttons */}
      <div className="flex flex-wrap gap-2.5 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full max-md:gap-1.5">
        {locations.map((location, index) => (
          <button
            key={index}
            className={`overflow-hidden gap-2.5 h-[70px] w-[160px] text-white border border-white border-solid duration-300 hover:bg-green-950 ${index === 0 ? "bg-green-950" : "bg-indigo-900"
              } rounded-[87px] max-md:w-[120px] max-md:h-[50px] max-md:text-lg`}
          >
            {location}
          </button>
        ))}
      </div>
      
      {/* Right Image */}
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d284eca4fb5fd00c8f824e8b87665cacece77fcb9c916923c0f0469fcc13cfa7?placeholderIfAbsent=true&apiKey=1b800a32eafa4ceda4739330db92f3bd" 
        className="object-contain self-stretch my-auto aspect-square w-[35px] max-md:w-[25px]" 
        alt="" 
      />
    </div>
  );
}

export default LocationTags;
