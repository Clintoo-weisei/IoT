function Login() {
    try {
        const [credentials, setCredentials] = React.useState({
            email: '',
            password: ''
        });
        const [error, setError] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setError('');
            setIsLoading(true);

            try {
                const response = await fetch('https://api.example.com/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials)
                });

                if (!response.ok) {
                    throw new Error('Login failed');
                }

                const data = await response.json();
                localStorage.setItem('userToken', data.token);
                window.location.href = '/dashboard';
            } catch (error) {
                setError('Invalid email or password');
                console.error('Login error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        const handleChange = (e) => {
            setCredentials({
                ...credentials,
                [e.target.name]: e.target.value
            });
        };

        return (
            <div data-name="login-page" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                        <p className="mt-2 text-gray-600">Log in to your ClinStudies account</p>
                    </div>

                    {error && (
                        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                                value={credentials.email}
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
                                value={credentials.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="/forgot-password" className="text-blue-600 hover:text-blue-800">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    Logging in...
                                </span>
                            ) : (
                                'Log in'
                            )}
                        </button>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-blue-600 hover:text-blue-800">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Login page error:', error);
        reportError(error);
        return null;
    }
}
