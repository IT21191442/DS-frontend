import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const logOut = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload();
    };

    const handleprofile = () => {
        navigate("/profile");
    };

    const handleNavLinkClick = (e, path) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="logo">
                    <a href="#" className="text-2xl font-bold text-indigo-600">
                        LearnHub
                    </a>
                </div>
                <nav className="hidden md:flex space-x-6">
                    {isLoggedIn ? (
                        <>
                            <a href="/userHomePage" className="text-gray-600 hover:text-indigo-600" onClick={(e) => handleNavLinkClick(e, "/userHomePage")}>
                                Home
                            </a>
                            <a href="/getAllCoursesList" className="text-gray-600 hover:text-indigo-600" onClick={(e) => handleNavLinkClick(e, "/getAllCoursesList")}>
                                Courses
                            </a>
                            <a href="/" className="text-gray-600 hover:text-indigo-600" onClick={(e) => handleNavLinkClick(e, "/")}>
                                About
                            </a>
                            <a href="/" className="text-gray-600 hover:text-indigo-600" onClick={(e) => handleNavLinkClick(e, "/")}>
                                Contact
                            </a>
                        </>
                    ) : (
                        <>
                            <a href="/" className="text-gray-600 hover:text-indigo-600">
                                Home
                            </a>
                            <a href="/" className="text-gray-600 hover:text-indigo-600">
                                Courses
                            </a>
                            <a href="/" className="text-gray-600 hover:text-indigo-600">
                                About
                            </a>
                            <a href="/" className="text-gray-600 hover:text-indigo-600">
                                Contact
                            </a>
                        </>
                    )}
                </nav>
                <div className="flex items-center">
                    {isLoggedIn ? (
                        <>
                            <button className="bg-white text-slate-950 py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 ml-4" onClick={handleprofile}>
                                <FontAwesomeIcon icon={faUserCircle} size="lg" />
                            </button>

                            <button className="bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300" onClick={logOut}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                            </button>

                        </>
                    ) : (
                        <a
                            href="/login"
                            className="bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                        >
                            <FontAwesomeIcon icon={faSignInAlt} /> Login
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}
