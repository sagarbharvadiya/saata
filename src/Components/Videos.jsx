import React from "react";
import VideoData from "../DataJson/data.json";
const Videos = () => {
  return (
    <>
      <section className="video">
        <div className="info-container">
          {VideoData.video.map((d, i) => {
            return (
              <React.Fragment key={i}>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube-nocookie.com/embed/${d.id}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Videos;
