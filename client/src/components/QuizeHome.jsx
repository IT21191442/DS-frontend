import React from 'react';
import AdminDashboard from './AdminDashboard';
import { useParams, useNavigate } from 'react-router-dom';

const QuizHome = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleStartQuiz = () => {
    navigate(`/questions/${id}`);
    console.log(id);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700 text-gray-100 p-10 rounded-lg">
      <AdminDashboard />
      <div className="flex justify-center items-center w-32 h-32 bg-white rounded-full mb-8 border-2 border-blue-500">
        <div className="w-20 h-20 bg-blue-500 rounded-full"></div>
      </div>
      <h1 className="text-4xl font-bold mb-4">Welcome to QuizTime</h1>
      <p className="text-lg mb-6">Test your knowledge and have fun!</p>
      <button 
        className="px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded transition duration-300"
        onClick={() => handleStartQuiz()}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizHome;
