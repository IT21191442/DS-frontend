import React from 'react'

function Fotter() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="logo mb-4 md:mb-0">
                    <a href="#" className="text-2xl font-bold">
                        LearnHub
                    </a>
                </div>
                <nav className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white">
                        Home
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Courses
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        About
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Fotter
