function InstructorDashboard() {
    try {
        const [dashboardData, setDashboardData] = React.useState(null);
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
            const loadDashboard = async () => {
                try {
                    const data = await fetchInstructorDashboard();
                    setDashboardData(data);
                } catch (error) {
                    console.error('Error loading instructor dashboard:', error);
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
            totalStudents,
            totalEarnings,
            courses,
            recentReviews,
            upcomingClasses
        } = dashboardData || {};

        return (
            <div data-name="instructor-dashboard" className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Instructor Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div data-name="stats-card" className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Total Students</h3>
                            <i className="fas fa-users text-2xl text-blue-600"></i>
                        </div>
                        <p className="text-3xl font-bold">{totalStudents}</p>
                    </div>

                    <div data-name="stats-card" className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Total Earnings</h3>
                            <i className="fas fa-money-bill text-2xl text-green-600"></i>
                        </div>
                        <p className="text-3xl font-bold">KSh {totalEarnings}</p>
                    </div>

                    <div data-name="stats-card" className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Active Courses</h3>
                            <i className="fas fa-book text-2xl text-purple-600"></i>
                        </div>
                        <p className="text-3xl font-bold">{courses?.length || 0}</p>
                    </div>

                    <div data-name="stats-card" className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Upcoming Classes</h3>
                            <i className="fas fa-calendar text-2xl text-orange-600"></i>
                        </div>
                        <p className="text-3xl font-bold">{upcomingClasses?.length || 0}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div data-name="courses-section" className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Your Courses</h2>
                        <div className="space-y-4">
                            {courses?.map(course => (
                                <div
                                    key={course.id}
                                    className="flex items-center justify-between p-4 border rounded-lg"
                                >
                                    <div>
                                        <h3 className="font-semibold">{course.title}</h3>
                                        <p className="text-gray-600">{course.enrolledStudents} students</p>
                                    </div>
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div data-name="reviews-section" className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4">Recent Reviews</h2>
                        <div className="space-y-4">
                            {recentReviews?.map(review => (
                                <div key={review.id} className="border-b pb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="font-semibold">{review.studentName}</p>
                                        <div className="text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`fas fa-star ${
                                                        i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                                                    }`}
                                                ></i>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Instructor Dashboard error:', error);
        reportError(error);
        return null;
    }
}
