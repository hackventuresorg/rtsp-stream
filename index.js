const ffmpeg = require("fluent-ffmpeg");

const inputFile = "./sample.mp4";
const outputUrl = "rtsp://rtsp-server:8554/mystream";

ffmpeg(inputFile)
    .inputOptions("-re")
    .outputOptions([
        "-f",
        "rtsp",
        "-rtsp_transport",
        "tcp",
        "-vcodec",
        "libx264",
        "-preset",
        "veryfast",
        "-tune",
        "zerolatency",
        "-acodec",
        "aac",
    ])
    .output(outputUrl)
    .on("start", (commandLine) =>
        console.log("Spawned ffmpeg with command:", commandLine)
    )
    .on("error", (err, stdout, stderr) => {
        console.error("FFmpeg error:", err.message);
        console.error("stdout:", stdout);
        console.error("stderr:", stderr);
    })
    .on("end", () => console.log("Streaming ended"))
    .run();
