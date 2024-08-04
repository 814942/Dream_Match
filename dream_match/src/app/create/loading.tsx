"use client"

import Image from "next/image";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="soccer-ball"></div>
        <Image
          src="/ballon.png"
          alt="loading"
          height={50}
          width={50}
        />
    </div>
  );
};

export default Loading;
