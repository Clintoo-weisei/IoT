function VideoPlayer({ videoUrl, title }) {
    try {
        const [isPlaying, setIsPlaying] = React.useState(false);
        const [currentTime, setCurrentTime] = React.useState(0);
        const [duration, setDuration] = React.useState(0);
        const videoRef = React.useRef(null);

        const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        };

        const handleTimeUpdate = () => {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
            }
        };

        const handleLoadedMetadata = () => {
            if (videoRef.current) {
                setDuration(videoRef.current.duration);
            }
        };

        const handlePlayPause = () => {
            if (videoRef.current) {
                if (isPlaying) {
                    videoRef.current.pause();
                } else {
                    videoRef.current.play();
                }
                setIsPlaying(!isPlaying);
            }
        };

        const handleSeek = (e) => {
            const seekTime = (e.target.value / 100) * duration;
            if (videoRef.current) {
                videoRef.current.currentTime = seekTime;
                setCurrentTime(seekTime);
            }
        };

        return (
            <div data-name="video-player" className="relative">
                <div className="video-container bg-black">
                    <video
                        ref={videoRef}
                        className="w-full"
                        src={videoUrl}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
                    <div className="flex items-center justify-between text-white">
                        <button
                            className="text-2xl focus:outline-none"
                            onClick={handlePlayPause}
                        >
                            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                        </button>

                        <div className="flex-1 mx-4">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={(currentTime / duration) * 100 || 0}
                                onChange={handleSeek}
                                className="w-full"
                            />
                            <div className="flex justify-between text-sm">
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                        </div>

                        <button className="text-xl focus:outline-none">
                            <i className="fas fa-expand"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('VideoPlayer component error:', error);
        reportError(error);
        return null;
    }
}
