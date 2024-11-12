# AI Dashcam Monitoring App

This app is an AI-enabled dashcam monitoring platform that streams live video from dashcams, detects anomalies in real-time, and alerts users.

## Features:
- **Real-Time Video Streaming**: Stream live video from dashcams to the dashboard.
- **AI-Powered Anomaly Detection**: Real-time AI detection of driving anomalies and risky behaviors.
- **Event Alerts**: Get real-time alerts for accidents, harsh driving, or anomalies.
- **Cloud Video Storage**: Save video footage in the cloud for later review.
- **GPS Tracking**: Monitor vehicle locations using GPS data.
- **Multi-Cam Support**: Support for streaming from multiple cameras (e.g., front and rear).

## Backend Requirements:
1. **Real-Time Video Streaming API**: Supports HLS or RTSP for live video.
2. **Anomaly Detection API**: Provides AI-based anomaly detection on video streams.
3. **Event Notification API**: Sends WebSocket or Firebase notifications.
4. **User Authentication**: API for user login and signup.
5. **Video Storage**: Cloud storage for saving videos.
6. **Analytics API**: Provides stats on video and anomaly detections.
7. **GPS Tracking**: API to report vehicle location.

## Camera Requirements:
1. **RTSP/HLS Streaming**: Camera must support these protocols.
2. **Night Vision**: Camera should provide low-light video streaming.
3. **AI Processing**: (Optional) Offload some AI anomaly detection to the camera.
4. **Resolution Control**: Adjust video quality based on bandwidth.
5. **Multi-Channel Support**: Support for multiple video feeds.

## How to Run:

1. Clone the repository:
   ```bash
   git clone https://github.com/ceo-hitoat/sec1.git
   cd device-monitoring-app
