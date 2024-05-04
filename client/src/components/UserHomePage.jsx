import React from 'react';
import Fotter from './Fotter';

const UserHomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}


            {/* Hero Section */}
            <section className="bg-indigo-600 text-white py-20">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">
                            Learn from the best, anytime, anywhere.
                        </h1>
                        <p className="text-lg mb-8">
                            Discover a world of knowledge at your fingertips with our online
                            learning platform. Explore a wide range of courses, taught by
                            industry experts, and unlock your full potential.
                        </p>
                        <a
                            href="#"
                            className="bg-white text-indigo-600 py-3 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300"
                        >
                            Get Started
                        </a>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Hero Image"
                            className="mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Featured Courses
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://via.placeholder.com/400x200"
                                alt="Course Image"
                                className="w-full"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                                <p className="text-gray-600 mb-4">
                                    Learn to build modern and responsive websites using HTML, CSS,
                                    and JavaScript.
                                </p>
                                <a
                                    href="#"
                                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                                >
                                    Enroll Now
                                </a>
                            </div>
                        </div>
                        {/* Add more course cards here */}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Start your learning journey today
                    </h2>
                    <p className="text-lg mb-8">
                        Unlock your potential and gain valuable skills with our online
                        courses. Join our community of learners and take the first step
                        towards success.
                    </p>
                    <a
                        href="#"
                        className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                    >
                        Browse Courses
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Fotter />

        </div>
    );
};

export default UserHomePage;