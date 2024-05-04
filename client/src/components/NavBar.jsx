import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
        window.location.href = "/login";
    };

    const profile = () => {
        navigate("/profile");
    };

    return (
        <nav className="bg-black shadow-lg py-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {/* <img src={Logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" /> */}
                        <a className="text-white text-3xl font-bold ml-5" href="#">
                            Location And Device Management System
                        </a>
                    </div>
                    <div className="md:flex md:items-center space-x-4">
                        <ul className="flex space-x-4 text-white">
                            {isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/adminHome">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={logOut}>
                                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={profile}>
                                            <FontAwesomeIcon icon={faSignOutAlt} /> Profile
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link bg-orange-600 rounded text-black px-4 py-2"
                                            href="/login"
                                        >
                                            <FontAwesomeIcon icon={faSignInAlt} /> Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link bg-teal-400 rounded text-black px-4 py-2" href="/register" > <FontAwesomeIcon icon={faUserPlus} /> Register </a> */}
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}