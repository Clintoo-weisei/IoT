function Home() {
    try {
        const [featuredCourses, setFeaturedCourses] = React.useState([]);
        const [categories, setCategories] = React.useState([]);
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
            const coursesData = [
                {
                    id: 1,
                    title: "IoT Fundamentals and Architecture",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                    price: 29999,
                    rating: 4.8,
                    enrolledStudents: 1534,
                    duration: "48 hours"
                },
                {
                    id: 2,
                    title: "Smart Home Automation with IoT",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
                    price: 34999,
                    rating: 4.9,
                    enrolledStudents: 2187,
                    duration: "52 hours"
                },
                {
                    id: 3,
                    title: "Industrial IoT Applications",
                    instructor: "Dr. Sarah Johnson",
                    backgroundImage: "https://images.industrial.jpg",
                    price: 39999,
                    rating: 4.7,
                    enrolledStudents: 1876,
                    duration: "56 hours"
                },
                {
                    id: 4,
                    title: "IoT Security and Privacy",
                    instructor: "Clinton Weisei",
                   backgroundImage: "https://images.1696772494832.png",
                    
                    price: 32999,
                    rating: 4.9,
                    enrolledStudents: 1432,
                    duration: "45 hours"
                },
                {
                    id: 5,
                    title: "IoT Data Analytics and Visualization",
                    instructor: "Prof. David Miller",
                    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                    price: 36999,
                    rating: 4.8,
                    enrolledStudents: 1654,
                    duration: "50 hours"
                },
                {
                    id: 6,
                    title: "Embedded Systems for IoT",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
                    price: 31999,
                    rating: 4.9,
                    enrolledStudents: 1234,
                    duration: "42 hours"
                },
                {
                    id: 7,
                    title: "IoT Networking Protocols",
                    instructor: "Dr. Lisa Anderson",
                    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
                    price: 29999,
                    rating: 4.7,
                    enrolledStudents: 987,
                    duration: "40 hours"
                },
                {
                    id: 8,
                    title: "Cloud Computing for IoT",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
                    price: 33999,
                    rating: 4.8,
                    enrolledStudents: 1543,
                    duration: "48 hours"
                },
                {
                    id: 9,
                    title: "IoT Project Management",
                    instructor: "Prof. Michael Chen",
                    thumbnail: "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
                    price: 27999,
                    rating: 4.6,
                    enrolledStudents: 1123,
                    duration: "38 hours"
                },
                {
                    id: 10,
                    title: "Smart Agriculture with IoT",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1586094366581-d4cf80f5e354",
                    price: 35999,
                    rating: 4.8,
                    enrolledStudents: 876,
                    duration: "46 hours"
                },
                // New courses added
                {
                    id: 11,
                    title: "IoT for Smart Cities",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
                    price: 38999,
                    rating: 4.9,
                    enrolledStudents: 1245,
                    duration: "54 hours"
                },
                {
                    id: 12,
                    title: "Healthcare IoT Solutions",
                    instructor: "Dr. Emily White",
                    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
                    price: 37999,
                    rating: 4.8,
                    enrolledStudents: 956,
                    duration: "50 hours"
                },
                {
                    id: 13,
                    title: "Industrial Automation with IoT",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112c1e5f91",
                    price: 41999,
                    rating: 4.9,
                    enrolledStudents: 1678,
                    duration: "58 hours"
                },
                {
                    id: 14,
                    title: "IoT Sensor Programming",
                    instructor: "Prof. Robert Lee",
                    thumbnail: "https://images.unsplash.com/photo-1580584126903-c17d41830450",
                    price: 32999,
                    rating: 4.7,
                    enrolledStudents: 823,
                    duration: "44 hours"
                },
                {
                    id: 15,
                    title: "Smart Energy Management",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1548600916-dc8492f8e845",
                    price: 36999,
                    rating: 4.8,
                    enrolledStudents: 1432,
                    duration: "48 hours"
                },
                {
                    id: 16,
                    title: "IoT Network Security",
                    instructor: "Dr. James Wilson",
                    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
                    price: 39999,
                    rating: 4.9,
                    enrolledStudents: 1567,
                    duration: "52 hours"
                },
                {
                    id: 17,
                    title: "Smart Transportation Systems",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f",
                    price: 34999,
                    rating: 4.7,
                    enrolledStudents: 945,
                    duration: "46 hours"
                },
                {
                    id: 18,
                    title: "IoT Data Privacy",
                    instructor: "Prof. Sarah Chen",
                    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
                    price: 33999,
                    rating: 4.8,
                    enrolledStudents: 1234,
                    duration: "45 hours"
                },
                {
                    id: 19,
                    title: "Smart Building Automation",
                    instructor: "Clinton Weisei",
                    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c",
                    price: 37999,
                    rating: 4.9,
                    enrolledStudents: 1678,
                    duration: "52 hours"
                },
                {
                    id: 20,
                    title: "IoT Cloud Integration",
                    instructor: "Dr. Michael Brown",
                    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
                    price: 35999,
                    rating: 4.8,
                    enrolledStudents: 1432,
                    duration: "48 hours"
                }
            ];

            const categoriesData = [
                { 
                    id: 1, 
                    name: "IoT Fundamentals", 
                    count: 45, 
                    icon: "fa-microchip",
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                    color: "#4caf50"
                },
                { 
                    id: 2, 
                    name: "Smart Systems", 
                    count: 38, 
                    icon: "fa-robot",
                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
                    color: "#2196f3"
                },
                { 
                    id: 3, 
                    name: "Security", 
                    count: 25, 
                    icon: "fa-shield-alt",
                    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
                    color: "#f44336"
                },
                { 
                    id: 4, 
                    name: "Data Analytics", 
                    count: 30, 
                    icon: "fa-chart-line",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                    color: "#9c27b0"
                }
            ];

            setFeaturedCourses(coursesData);
            setCategories(categoriesData);
            setIsLoading(false);
        }, []);

        // Rest of the component remains exactly the same
        if (isLoading) {
            return (
                <div data-name="loading" className="flex justify-center items-center h-screen">
                    <i className="fas fa-spinner fa-spin text-4xl text-blue-600"></i>
                </div>
            );
        }

        return (
            <div data-name="home-page">
                <section data-name="hero-section" className="hero-section py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Master the Internet of Things
                        </h1>
                        <div className="flex justify-center items-center space-x-2 mb-8">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-green"></span>
                            <span className="dot dot-blue"></span>
                            <span className="dot dot-yellow"></span>
                        </div>
                        <p className="text-xl mb-8 text-gray-200">
                            Learn IoT technologies and build smart solutions for the future
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors">
                                Get Started
                            </button>
                            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                Browse Courses
                            </button>
                        </div>
                    </div>
                </section>

                <section data-name="categories-section" className="py-16 px-4 bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {categories.map(category => (
                                <div
                                    key={category.id}
                                    data-name={`category-${category.name.toLowerCase()}`}
                                    className="category-card"
                                    style={{ backgroundImage: `url(${category.image})` }}
                                >
                                    <div className="category-overlay">
                                        <div className="p-6 h-full flex flex-col justify-end">
                                            <i className={`fas ${category.icon} text-4xl mb-4`} style={{ color: category.color }}></i>
                                            <h3 className="text-xl font-semibold mb-2 text-white">{category.name}</h3>
                                            <p className="text-gray-200">{category.count} courses</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section data-name="featured-courses" className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    </div>
                </section>

                <section data-name="features-section" className="py-16 px-4 bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <i className="fas fa-microchip text-4xl text-blue-600 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">Industry-Standard IoT Labs</h3>
                                <p className="text-gray-600">Practice with real IoT devices and sensors</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-certificate text-4xl text-blue-600 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">Professional Certification</h3>
                                <p className="text-gray-600">Get certified in IoT technologies</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-users text-4xl text-blue-600 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
                                <p className="text-gray-600">Learn from industry professionals</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}
