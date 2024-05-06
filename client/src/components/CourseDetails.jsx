import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

const CourseQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/courses/api/v1/api/videos/getOneCourseById/${id}`);
        setCourse(response.data.video);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course details:', error);
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleDelete = async () => {
    const shouldDelete = window.confirm("Are you sure you want to delete this course?");
    
    if (shouldDelete) {
      try {
        const deleteURL = `http://localhost:5000/courses/api/v1/api/videos/deleteOneCourseById/${id}`;
        await axios.delete(deleteURL);
        console.log("Course deleted successfully!");
        navigate('/getAllCourses');
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  const handleUpdate = () => {
    navigate(`/updateCourse/${id}`);
  };

  const handleStartQuiz = () => {
    navigate(`/quizeHome/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className='bg-gray-700 text-gray '><br></br>
      <AdminDashboard />
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">{course?.coursename || 'Course Name N/A'}</h2>
        <p>Course ID: {course?.courseid || 'Course ID N/A'}</p>
        <img 
          src={course?.imgUrl || 'Image URL N/A'} 
          alt={course?.coursename || 'Course Name N/A'} 
          className="max-w-full mt-4"
        /><br></br>
        <p>Description: {course?.description || 'Description N/A'}</p>
        <p>Sections: {course?.sections || 'Sections N/A'}</p>
        <video controls className="max-w-full mt-2">
          <source src={course?.videoUrl || ''} type="video/mp4" />
          Your browser does not support the video tag.
        </video><br></br>
        <p>References: {course?.references || 'References N/A'}</p>
        <p>Price: {course?.price || 'Price N/A'}</p>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>Delete</button>
          <button className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={handleUpdate}>Update</button>
          <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default CourseQuiz;
