import React from "react";

const SingleVideo = ({ videoId }) => {
  return (
    <div className="single-video">
      <iframe
        width="560"
        height="350"
        src="https://www.youtube.com/embed/Lgmf1nTxsWA?si=owH-LFczl7s3WH-F"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default SingleVideo;
