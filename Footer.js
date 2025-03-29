function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">About EduKe</h3>
                            <p className="text-gray-400">
                                Leading online learning platform in Kenya providing quality education for everyone.
                                Learn from industry experts and get certified.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/courses" className="text-gray-400 hover:text-white transition-colors">
                                        Browse Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="/become-instructor" className="text-gray-400 hover:text-white transition-colors">
                                        Become an Instructor
                                    </a>
                                </li>
                                <li>
                                    <a href="/live-classes" className="text-gray-400 hover:text-white transition-colors">
                                        Live Classes
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/help" className="text-gray-400 hover:text-white transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/faq" className="text-gray-400 hover:text-white transition-colors">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <i className="fas fa-envelope mr-2"></i>
                                    info@eduke.co.ke
                                </li>
                                <li>
                                    <i className="fas fa-phone mr-2"></i>
                                    +254 792505624
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    Nairobi, Kenya
                                </li>
                            </ul>
                            <div className="mt-4 flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2024 EduKe.Designed by < a href="https://www.google.com/search?q=clinton+weisei&oq=clinton+weisei&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGD3SAQk5NzgwMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=Cg5jbGludG9uIHdlaXNlaVoQIg5jbGludG9uIHdlaXNlaZIBEHdlYnNpdGVfZGVzaWduZXKqATcQATIfEAEiG0qXEAKsaZQ6HzIg33wJ_yvDzQM-EiptEbgDXTISEAIiDmNsaW50b24gd2Vpc2Vp#rlimm=7370299854704419203">Clinton weisei</a> All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
