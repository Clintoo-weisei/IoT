function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [isLoggedIn, setIsLoggedIn] = React.useState(false);

        React.useEffect(() => {
            const token = localStorage.getItem('userToken');
            setIsLoggedIn(!!token);
        }, []);

        const handleLogout = () => {
            localStorage.removeItem('userToken');
            window.location.href = '/';
        };

        const menuItems = [
            { id: 1, name: 'Networks', path: '/networks' },
            { id: 2, name: 'Web Development', path: '/web-development' },
            { id: 3, name: 'Mobile Apps', path: '/mobile-apps' },
            { id: 4, name: 'Cybersecurity', path: '/cybersecurity' },
            { id: 5, name: 'Cloud Computing', path: '/cloud-computing' },
            { id: 6, name: 'Data Science', path: '/data-science' },
            { id: 7, name: 'Machine Learning', path: '/ai-ml' }
        ];

        return (
            <header data-name="header" className="header reflex top-0 z-50 shadow-md">
            
                <nav className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <div data-name="logo" className="flex items-center">
                            <img 
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" 
                                alt="ClinStudies Logo" 
                                className="h-10 w-10 mr-2 rounded-full"
                            />
                            <span className="text-xl font-bold text-white">ClinStudies</span>
                            <div className="ml-4 flex items-center space-x-2">
                                <span className="dot dot-red"></span>
                                <span className="dot dot-green"></span>
                                <span className="dot dot-blue"></span>
                            </div>
                        </div>

                        <div className="hidden md:flex space-x-6">
                            {menuItems.map(item => (
                                <a
                                    key={item.id}
                                    href={item.path}
                                    className="text-white hover:text-gray-200 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            {isLoggedIn ? (
                                <div className="flex items-center space-x-4">
                                    <a href="/dashboard" className="text-white hover:text-gray-200">
                                        Dashboard
                                    </a>
                                    <button 
                                        onClick={handleLogout}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <a href="/login" className=" bg-green-500 text-black  hover:text-green-0">
                                        Login
                                    </a>
                                    <a 
                                        href="/signup" 
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    >
                                        Sign Up
                                    </a>
                                </div>
                            )}
                        </div>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4">
                            <div className="flex flex-col space-y-3">
                                {menuItems.map(item => (
                                    <a
                                        key={item.id}
                                        href={item.path}
                                        className="text-white hover:text-gray-200 py-2"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                {isLoggedIn ? (
                                    <>
                                        <a href="/dashboard" className="text-white hover:text-gray-200 py-2">
                                            Dashboard
                                        </a>
                                        <button 
                                            onClick={handleLogout}
                                            className="text-red-500 hover:text-red-400 py-2 text-left"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <a href="/login" className="text-white hover:text-gray-200 py-2">
                                            Login
                                        </a>
                                        <a href="/signup" className="text-green-500 hover:text-green-400 py-2">
                                            Sign Up
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
