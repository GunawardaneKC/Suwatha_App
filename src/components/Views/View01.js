import React from 'react';
import background from '../Images/back001.png';

const View01 = () => {
  const powerBiEmbedUrl = 'https://app.powerbi.com/reportEmbed?reportId=84dbde7e-1d2f-4dce-9c43-ec8ab4c4660a&autoAuth=true&ctid=44e3cf94-19c9-4e32-96c3-14f5bf01391a'; // Replace with your Power BI embed URL

  return (
    <>
    <div
                className='fixed inset-0 h-screen'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    zIndex: -1,
                }}
            >
            </div>
    <div className="flex justify-center items-center min-h-screen ">
      <iframe
        title="Power BI Dashboard"
        width="100%"
        height="800px"
        src={powerBiEmbedUrl}
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
    </>
  );
};

export default View01;