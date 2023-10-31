import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making API requests
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage the overall loading state

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
    const apiKey = process.env.REACT_APP_YOUR_API_KEY;
    const channelId = process.env.REACT_APP_YOUR_CHANNEL_ID; // Replace with the ID of the YouTube channel you want to fetch videos from

    // Fetch all videos from the channel
    const fetchAllVideos = async (pageToken = "") => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&pageToken=${pageToken}&order=date&key=${apiKey}`
        );

        const newVideos = response.data.items.filter((item) => {
          // Check if the video data contains the required fields
          return (
            item.id &&
            item.id.videoId &&
            item.snippet &&
            item.snippet.thumbnails
          );
        });

        setVideos((prevVideos) => [...prevVideos, ...newVideos]);

        const nextPageToken = response.data.nextPageToken;

        // If there are more videos, fetch the next page recursively
        if (nextPageToken) {
          fetchAllVideos(nextPageToken);
        } else {
          setIsLoading(false); // Set loading state to false when fetching is complete
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setIsLoading(false); // Handle error and set loading state to false
      }
    };
    // Start fetching the videos
    fetchAllVideos();
  }, []);

  return (
    <>
      <section className="video">
        <div className="info-container">
          {videos.map((video) => (
            <div className="video-thumbnail" key={video.id.videoId}>
              {isLoading ? ( // Display individual loader for each video
                <div className="video-loader">
                <FontAwesomeIcon icon={faYoutube} size="3x" spin />
              </div>
              ) : (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Videos;
