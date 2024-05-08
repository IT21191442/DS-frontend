import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Courses from "../Images/download.png";


const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/courses/api/v1/api/videos/getAllCourses');
        setCourses(response.data.videos || []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" bg-gray-800 text-gray  ">
      
      <h1 className="text-center text-white text-4xl font-bold mb-4">Course List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 "> {/* Responsive grid for cards */}
        {courses.map((course, index) => (
          <div key={index}>
            <div className="bg-white shadow-md rounded-md overflow-hidden ml-8 mr-8">
              <img src={Courses} alt="CourseImage" className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{course.coursename || 'N/A'}</h3>
                <p className="text-gray-600 mb-2"><strong>Course ID:</strong> {course.courseid || 'N/A'}</p>
                <p className="text-gray-600 mb-2"><strong>Price:</strong> {course.price || 'N/A'}</p>
                <p className="text-gray-600 mb-2"><strong>Sections:</strong> {course.sections || 'N/A'}</p>
                {/* <Link to={`/course/${course.courseid}`} className="inline-block bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                  View Course
                </Link> */}
                <Link to={`/course/${course.courseid}`} className="inline-block bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                  pay
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div><br></br>
    </div>
  );
};

export default CourseList;
