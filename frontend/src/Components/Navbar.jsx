import { useState, useEffect } from "react";
import { Link,useLocation} from "react-router-dom";
import "../../public/fonts.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("/");

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsOpen(false);
    };
    useEffect(() => {
        // Update activeLink when the route changes
        setActiveLink(location.pathname);
    }, [location]);
    return (
        <nav className="bg-gradient-to-r from-[#1E3A8A] to-[#6A1B9A] text-white shadow-lg font-raleway ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-white"
                            onClick={() => handleLinkClick("/")}
                        >
                            MyCompany
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8">
                        {["/", "/about", "/services", "/career","/contact"].map((link) => (
                            <Link
                                key={link}
                                to={link}
                                className={`transition-colors px-3 py-1 rounded ${
                                    activeLink === link ? "bg-white text-black" : "text-white"
                                }`}
                                onClick={() => handleLinkClick(link)}
                            >
                                {link === "/" ? "Home" : link.replace("/", "").charAt(0).toUpperCase() + link.slice(2)}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-[#1E3A8A] to-[#6A1B9A]">
                    {["/", "/about", "/services", "/career","/contact"].map((link) => (
                        <Link
                            key={link}
                            to={link}
                            className={`block px-4 py-2 transition-colors rounded ${
                                activeLink === link ? "bg-white text-black" : "text-white"
                            }`}
                            onClick={() => handleLinkClick(link)}
                        >
                            {link === "/" ? "Home" : link.replace("/", "").charAt(0).toUpperCase() + link.slice(2)}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
