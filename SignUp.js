function SignUp() {
    try {
        const [formData, setFormData] = React.useState({
            fullName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        });
        const [error, setError] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setError('');
            setIsLoading(true);

            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch('https://api.example.com/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    throw new Error('Registration failed');
                }

                const data = await response.json();
                localStorage.setItem('userToken', data.token);
                window.location.href = '/dashboard';
            } catch (error) {
                setError('Failed to create account. Please try again.');
                console.error('Signup error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <div data-name="signup-page" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                        <p className="mt-2 text-gray-600">Join ClinStudies and start learning</p>
                    </div>

                    {error && (
                        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    Creating Account...
                                </span>
                            ) : (
                                'Sign Up'
                            )}
                        </button>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-600 hover:text-blue-800">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        );
    } catch (error) {
        console.error('SignUp page error:', error);
        reportError(error);
        return null;
    }
}
