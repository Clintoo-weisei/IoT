function StudentDashboard() {
    try {
        const [dashboardData, setDashboardData] = React.useState(null);
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
            const loadDashboard = async () => {
                try {
                    const data = await fetchStudentDashboard();
                    setDashboardData(data);
                } catch (error) {
                    console.error('Error loading student dashboard:', error);
                } finally {
                    setIsLoading(false);
                }
            };

            loadDashboard();
        }, []);

        if (isLoading) {
            return (
                <div data-name="loading" className="flex justify-center items-center h-screen">
                    <i className="fas fa-spinner fa-spin text-4xl text-blue-600"></i>
                </div>
            );
        }

        const {
            enrolledCourses,
            completedCourses,
            upcomingClasses,
            certificates
        } = dashboardData || {};

        return (
            <div data-name="student-dashboard" className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div data-name="stats-card" className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Enrolled Courses</h3>
                            <i className="fas fa-book-reader text-2xl text-blue-600"></i>
                        </div>
                        <p className="text-3xl font-bold">{enrolledCourses?.length || 0}</p>
                    </div>

                    <div data-name="stats-card" className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Completed Courses</h3>
                            <i className="fas fa-graduation-cap text-2xl text-green-600"></i>
                        </div>
                        <p className="text-3xl font-bold">{completedCourses?.length || 0}</p>
                    </div>

                    <div data-name="stats-card" className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Certificates</h3>
                            <i className="fas fa-certificate text-2xl text-yellow-600"></i>
                        </div>
                        <p className="text-3xl font-bold">{certificates?.length || 0}</p>
                    </div>

                    <div data-name="stats-card" className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Upcoming Classes</h3>
                            <i className="fas fa-calendar text-2xl text-purple-600"></i>
                        </div>
                        <p className="text-3xl font-bold">{upcomingClasses?.length || 0}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div data-name="current-courses" className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Current Courses</h2>
                        <div className="space-y-4">
                            {enrolledCourses?.map(course => (
                                <div
                                    key={course.id}
                                    className="border rounded-lg p-4"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold">{course.title}</h3>
                                        <span className="text-sm text-gray-500">
                                            {course.progress}% Complete
                                        </span>
                                    </div>
                                    <ProgressBar progress={course.progress} />
                                    <div className="mt-4">
                                        <a
                                            href={`/course/${course.id}`}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Continue Learning
                                            <i className="fas fa-arrow-right ml-2"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div data-name="upcoming-classes" className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Upcoming Live Classes</h2>
                        <div className="space-y-4">
                            {upcomingClasses?.map(class_ => (
                                <div
                                    key={class_.id}
                                    className="border rounded-lg p-4"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold">{class_.title}</h3>
                                        <span className="text-sm text-gray-500">
                                            {new Date(class_.startTime).toLocaleString()}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-2">
                                        Instructor: {class_.instructor}
                                    </p>
                                    <a
                                        href={class_.zoomLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                    >
                                        <i className="fas fa-video mr-2"></i>
                                        Join Class
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div data-name="certificates" className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Your Certificates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates?.map(cert => (
                            <div
                                key={cert.id}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-semibold">{cert.courseName}</h3>
                                        <p className="text-gray-600">
                                            Completed: {new Date(cert.completionDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <i className="fas fa-certificate text-3xl text-yellow-500"></i>
                                </div>
                                <a
                                    href={cert.downloadUrl}
                                    className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                                >
                                    <i className="fas fa-download mr-2"></i>
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Student Dashboard error:', error);
        reportError(error);
        return null;
    }
}
