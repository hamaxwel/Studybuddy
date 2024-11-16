import React, { useState } from 'react';
import './TeacherDashboard.css'

const TeacherDashboard = () => {
  const [isLive, setIsLive] = useState(false);
  const [videoFiles, setVideoFiles] = useState([]);
  const [uploadedVideos, setUploadedVideos] = useState([]);

  // Handle Go Live functionality
  const handleGoLive = () => {
    setIsLive(true);
  };

  // Handle Stop Live functionality
  const handleStopLive = () => {
    setIsLive(false);
  };

  // Handle Video File Upload
  const handleVideoUpload = (event) => {
    const files = event.target.files;
    setVideoFiles([...files]);
  };

  // Handle Video Upload Submission
  const handleUploadVideo = () => {
    if (videoFiles.length === 0) {
      alert('Please select a video to upload');
      return;
    }
    setUploadedVideos([...uploadedVideos, ...Array.from(videoFiles)]);
    setVideoFiles([]); // Clear selected files after upload
  };

  return (
    <div className="teacher-dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Teacher Dashboard</h1>
        <p>Manage your classes, go live, and post video content for students.</p>
      </header>

      <div className="dashboard-main">
        <div className="widget-container">
          {/* Go Live Section */}
          <div className="widget go-live-widget">
            <h2>Go Live</h2>
            <button
              onClick={isLive ? handleStopLive : handleGoLive}
              className={isLive ? 'stop-live-btn' : 'start-live-btn'}
            >
              {isLive ? 'Stop Live Session' : 'Start Live Session'}
            </button>
            <p>{isLive ? 'You are live!' : 'Your live session will appear here.'}</p>
          </div>

          {/* Video Upload Section */}
          <div className="widget video-upload-widget">
            <h2>Post Video Content</h2>
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={handleVideoUpload}
            />
            <button onClick={handleUploadVideo} className="upload-video-btn">
              Upload Video
            </button>
            <div className="uploaded-videos">
              <h3>Uploaded Videos</h3>
              <ul>
                {uploadedVideos.map((video, index) => (
                  <li key={index}>
                    <video width="200" controls>
                      <source src={URL.createObjectURL(video)} type="video/mp4" />
                    </video>
                    <p>{video.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Assignments Section */}
          <div className="widget">
            <h2>Your Upcoming Classes</h2>
            <ul>
              <li>Math - Due Friday</li>
              <li>Science - Due Monday</li>
              <li>History - Due Wednesday</li>
            </ul>
          </div>

          {/* Performance Section */}
          <div className="widget">
            <h2>Student Performance</h2>
            <p>Average grade: 90%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default TeacherDashboard;
