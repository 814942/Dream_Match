"use client"

import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full bg-white">
        {/* <Image
          src="/ballon.png"
          alt="loading"
          height={50}
          width={50}
          className="bounce-animation"
        /> */}
        <p>Loading...</p>
    </div>
  );
};

export default Loading;
