const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;

app.get('/download', async (req, res) => {
    const encodedVideoUrl = req.query.url;
    const videoUrl = decodeURIComponent(encodedVideoUrl);

    if (!videoUrl) {
        return res.status(400).send('No URL provided');
    }

    try {
        if (!ytdl.validateURL(videoUrl)) {
            return res.status(400).send('Invalid YouTube URL');
        }

        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        };

        // Set the headers and stream the video
        res.header('Content-Disposition', 'attachment; filename="video.mp4"');
        ytdl(videoUrl, { format: 'mp4', requestOptions: { headers } }).pipe(res);
    } catch (error) {
        console.error('Error during video download:', error);
        res.status(500).send('An error occurred');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
