function CourseCard({ course }) {
    try {
        const { title, instructor, thumbnail, price, rating, enrolledStudents, duration } = course;

        const formatPrice = (price) => {
            return new Intl.NumberFormat('en-KE', {
                style: 'currency',
                currency: 'KES',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(price);
        };

        return (
            <div data-name="course-card" className="course-card bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    data-name="course-thumbnail"
                    src={thumbnail}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 data-name="course-title" className="text-xl font-semibold mb-2">{title}</h3>
                    <p data-name="instructor-name" className="text-blue-600 font-bold mb-2">
                        <i className="fas fa-user-tie mr-2"></i>
                        {instructor}
                    </p>
                    <div data-name="course-stats" className="flex justify-between items-center mb-3">
                        <span className="text-yellow-500">
                            <i className="fas fa-star mr-1"></i>
                            {rating}
                        </span>
                        <span className="text-gray-600">
                            <i className="fas fa-users mr-1"></i>
                            {enrolledStudents} students
                        </span>
                        <span className="text-green-600 font-bold">
                            <i className="fas fa-clock mr-1"></i>
                            {duration}
                        </span>
                    </div>
                    <div data-name="course-price" className="flex justify-between items-center">
                        <span className="text-lg font-bold text-red-600">{formatPrice(price)}</span>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CourseCard component error:', error);
        reportError(error);
        return null;
    }
}
