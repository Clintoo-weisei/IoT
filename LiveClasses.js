function LiveClasses() {
    try {
        const [liveClasses, setLiveClasses] = React.useState([]);
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
            // Simulated data
            setLiveClasses([
                {
                    id: 1,
                    title: "Advanced JavaScript Concepts",
                    instructor: "John Doe",
                    date: "2024-02-01T14:00:00Z",
                    duration: "2 hours",
                    zoomLink: "https://zoom.us/j/example",
                    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                },
                {
                    id: 2,
                    title: "UI/UX Design Principles",
                    instructor: "Jane Smith",
                    date: "2024-02-02T15:00:00Z",
                    duration: "1.5 hours",
                    zoomLink: "https://zoom.us/j/example2",
                    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                }
            ]);
            setIsLoading(false);
        }, []);

        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleString('en-KE', {
                dateStyle: 'long',
                timeStyle: 'short'
            });
        };

        if (isLoading) {
            return (
                <div data-name="loading" className="flex justify-center items-center h-screen">
                    <i className="fas fa-spinner fa-spin text-4xl text-blue-600"></i>
                </div>
            );
        }

        return (
            <div data-name="live-classes-page" className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Live Classes</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {liveClasses.map(liveClass => (
                        <div
                            key={liveClass.id}
                            data-name={`live-class-${liveClass.id}`}
                            className="live-class-card"
                        >
                            <img
                                src={liveClass.thumbnail}
                                alt={liveClass.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{liveClass.title}</h3>
                                <p className="text-gray-600 mb-2">
                                    <i className="fas fa-user-tie mr-2"></i>
                                    {liveClass.instructor}
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <i className="fas fa-calendar mr-2"></i>
                                    {formatDate(liveClass.date)}
                                </p>
                                <p className="text-gray-600 mb-4">
                                    <i className="fas fa-clock mr-2"></i>
                                    {liveClass.duration}
                                </p>
                                <a
                                    href={liveClass.zoomLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
                                >
                                    <i className="fas fa-video mr-2"></i>
                                    Join Class
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Live Classes page error:', error);
        reportError(error);
        return null;
    }
}
