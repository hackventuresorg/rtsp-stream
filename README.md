# RTSP Video Streamer

A simple application that streams a video file as an RTSP stream using FFmpeg.

## Prerequisites

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd rtsp-stream
```

### 2. Add a sample video file

Place a video file named `sample.mp4` in the root directory of the project. This will be the video that gets streamed.

```bash
# Example: Copy an existing video file to the project root
cp /path/to/your/video.mp4 ./sample.mp4
```

### 3. Run with Docker Compose

Build and start the containers:

```bash
docker-compose up --build
```

This command will:

-   Start an RTSP server container (using aler9/rtsp-simple-server)
-   Build and start the video streamer container
-   Mount your local directory to the streamer container
-   Stream the sample.mp4 file via RTSP

## Accessing the Stream

The video is available at:

```
rtsp://localhost:8554/mystream
```

You can view this stream using VLC or any other RTSP-compatible player:

1. Open VLC
2. Go to Media > Open Network Stream
3. Enter the RTSP URL: rtsp://localhost:8554/mystream
4. Click Play

## Stopping the Service

To stop the streaming service:

```bash
docker-compose down
```

## Customization

To use a different video file, either:

-   Replace the sample.mp4 file
-   Or modify the `inputFile` variable in index.js to point to your video file

## Troubleshooting

If you encounter issues:

-   Check that your video file is in a format supported by FFmpeg
-   Ensure ports 8554 is not already in use on your system
-   Check the container logs: `docker-compose logs`
