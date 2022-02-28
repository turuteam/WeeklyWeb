import React from 'react';


export default props  => {
  return (
    <div className="shadow-lg pb-0 mb-4 hidden lg:block">
      <video controls autoPlay={true} muted loop>
        <source src="/videos/weekly.webm" type="video/webm" />
        <source src="/videos/weekly.mp4" type="video/mp4" />
      </video>
    </div>
  );
};