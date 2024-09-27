import React from 'react';
import ImageBox from './ImageBox';

const MainImages = () => {
  return (
    <div className='p-[50px] mt-[100px] md:mt[10px]'>
      {/* This grid will adjust based on screen size */}
      <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3'>
        <ImageBox imagesrc={"/1.png"} />
        <ImageBox imagesrc={"/2.png"} />
        <ImageBox imagesrc={"/3.png"} />
      </div>
      <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3'>
        <ImageBox imagesrc={"/1.png"} />
        <ImageBox imagesrc={"/2.png"} />
        <ImageBox imagesrc={"/3.png"} />
      </div>
      <div className='grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3'>
        <ImageBox imagesrc={"/1.png"} />
        <ImageBox imagesrc={"/2.png"} />
        <ImageBox imagesrc={"/3.png"} />
      </div>
    </div>
  );
}

export default MainImages;
