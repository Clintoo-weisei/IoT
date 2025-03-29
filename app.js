function App() {
    try {
        return (
            <div data-name="app" className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Home />
                </main>
                <footer data-name="footer" className="bg-gray-900 text-white py-8">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">About Us</h3>
                                <p className="text-gray-400">
                                    Leading online learning platform in Kenya providing quality education for everyone.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Instructors</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Live Classes</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Practical Classes</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Support</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Contact</h3>
                                <p className="text-gray-400">
                                    Email: info@eduke.co.ke<br />
                                    Phone: +254 792505624<br />
                                    Nairobi, Kenya
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                            © 2024 E-Kenya.  Designed by <a href="https://www.google.com/search?q=clinton+weisei&oq=clinton+weisei&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGD3SAQk5NzgwMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=Cg5jbGludG9uIHdlaXNlaVoQIg5jbGludG9uIHdlaXNlaZIBEHdlYnNpdGVfZGVzaWduZXKqATcQATIfEAEiG0qXEAKsaZQ6HzIg33wJ_yvDzQM-EiptEbgDXTISEAIiDmNsaW50b24gd2Vpc2Vp#rlimm=7370299854704419203">Clinton weisei</a>.All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
