import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const CourseUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    courseid: "",
    coursename: "",
    description: "",
    sections: "",
    price: "",
    references: "",
    imgUrl: "",
    videoUrl: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/courses/api/v1/api/videos/getOneCourseById/${id}`
        );
        setCourse(response.data.video);
        setFormData(response.data.video);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    try {
      const updateURL = `http://localhost:5000/courses/api/v1/api/videos/updateOneCourseById/${id}`;
      await axios.put(updateURL, formData);
      alert("Course updated successfully");
      navigate("/getAllCourses");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="flex bg-gray-700 text-gray-100 py-8">
      <AdminDashboard />
      <div className="flex-grow max-w-2xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-100 mt-0 text-center">
          Update Course Details
        </h2><br></br>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-xl mx-auto bg-gray-600 p-8 rounded-lg"
        >
          <div className="mb-4">
            <label className="block mb-2">Course ID:</label>
            <input
              type="text"
              name="courseid"
              value={formData.courseid}
              readOnly
              className="form-input w-full px-4 py-2 border border-gray-500 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Course Name:</label>
            <input
              type="text"
              name="coursename"
              value={formData.coursename}
              onChange={handleChange}
              required
              className="form-input w-full px-4 py-2 border border-gray-500 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Sections:</label>
            <input
              type="text"
              name="sections"
              value={formData.sections}
              onChange={handleChange}
              className="form-input w-full px-4 py-2 border border-gray-500 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-textarea w-full px-4 py-2 border border-gray-500 rounded text-black"
              rows="6"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Image URL:</label>
            <input
              type="text"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleChange}
              className="form-input w-full px-4 py-2 border border-gray-500 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Video URL:</label>
            <input
              type="text"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              className="form-input w-full px-4 py-2 border border-gray-500 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price:</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="form-input w-full px-4 py-2 border border-gray-500 rounded text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">References:</label>
            <textarea
              name="references"
              value={formData.references}
              onChange={handleChange}
              className="form-textarea w-full px-4 py-2 border border-gray-500 rounded text-black"
              rows="4"
            />
          </div>
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseUpdate;
