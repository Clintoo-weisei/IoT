function CourseDetails({ courseId }) {
    try {
        const [course, setCourse] = React.useState(null);
        const [activeTab, setActiveTab] = React.useState('content');
        const [isLoading, setIsLoading] = React.useState(true);
        const [currentLesson, setCurrentLesson] = React.useState(null);

        React.useEffect(() => {
            const loadCourse = async () => {
                try {
                    const data = await fetchCourseDetails(courseId);
                    setCourse(data);
                    if (data.lessons?.length > 0) {
                        setCurrentLesson(data.lessons[0]);
                    }
                } catch (error) {
                    console.error('Error loading course details:', error);
                } finally {
                    setIsLoading(false);
                }
            };

            loadCourse();
        }, [courseId]);

        const handleLessonClick = (lesson) => {
            setCurrentLesson(lesson);
        };

        if (isLoading) {
            return (
                <div data-name="loading" className="flex justify-center items-center h-screen">
                    <i className="fas fa-spinner fa-spin text-4xl text-blue-600"></i>
                </div>
            );
        }

        if (!course) {
            return (
                <div data-name="error" className="container mx-auto px-4 py-8 text-center">
                    <h2 className="text-2xl font-bold text-red-600">Course not found</h2>
                </div>
            );
        }

        return (
            <div data-name="course-details" className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {currentLesson && (
                            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                                <VideoPlayer
                                    videoUrl={currentLesson.videoUrl}
                                    title={currentLesson.title}
                                />
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-4">{currentLesson.title}</h2>
                                    <p className="text-gray-600">{currentLesson.description}</p>
                                    {currentLesson.quiz && (
                                        <div className="mt-8">
                                            <Quiz quiz={currentLesson.quiz} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="border-b">
                                <div className="flex">
                                    <button
                                        className={`px-6 py-3 ${
                                            activeTab === 'content'
                                                ? 'border-b-2 border-blue-600 text-blue-600'
                                                : 'text-gray-600'
                                        }`}
                                        onClick={() => setActiveTab('content')}
                                    >
                                        Course Content
                                    </button>
                                    <button
                                        className={`px-6 py-3 ${
                                            activeTab === 'discussion'
                                                ? 'border-b-2 border-blue-600 text-blue-600'
                                                : 'text-gray-600'
                                        }`}
                                        onClick={() => setActiveTab('discussion')}
                                    >
                                        Discussion
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                {activeTab === 'content' ? (
                                    <div className="space-y-4">
                                        {course.lessons?.map((lesson, index) => (
                                            <div
                                                key={lesson.id}
                                                className={`p-4 rounded-lg cursor-pointer ${
                                                    currentLesson?.id === lesson.id
                                                        ? 'bg-blue-50 border border-blue-200'
                                                        : 'hover:bg-gray-50'
                                                }`}
                                                onClick={() => handleLessonClick(lesson)}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="text-gray-500 text-sm">
                                                            Lesson {index + 1}
                                                        </span>
                                                        <h3 className="font-semibold">{lesson.title}</h3>
                                                    </div>
                                                    <div className="flex items-center text-gray-500">
                                                        <i className="fas fa-clock mr-2"></i>
                                                        {lesson.duration}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <Discussion courseId={courseId} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-4">Course Progress</h3>
                            <ProgressBar progress={course.progress} />
                            <p className="text-center mt-2 text-gray-600">
                                {course.progress}% Complete
                            </p>
                            <div className="mt-6 space-y-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>
                                        <i className="fas fa-book-reader mr-2"></i>
                                        Lessons
                                    </span>
                                    <span>{course.lessons?.length || 0}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>
                                        <i className="fas fa-clock mr-2"></i>
                                        Duration
                                    </span>
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>
                                        <i className="fas fa-certificate mr-2"></i>
                                        Certificate
                                    </span>
                                    <span>Included</span>
                                </div>
                            </div>
                            <button className="w-full mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                                Continue Learning
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Course Details error:', error);
        reportError(error);
        return null;
    }
}
