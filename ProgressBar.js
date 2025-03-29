function ProgressBar({ progress }) {
    try {
        return (
            <div data-name="progress-bar" className="progress-bar h-4">
                <div
                    data-name="progress-fill"
                    className="progress-fill h-full"
                    style={{ width: `${progress}%` }}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        );
    } catch (error) {
        console.error('ProgressBar component error:', error);
        reportError(error);
        return null;
    }
}
