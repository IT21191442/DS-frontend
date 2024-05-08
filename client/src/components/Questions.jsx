import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import welldone_gif from "../Images/welldone.gif";
import Clock from "./Clock";

const Questions = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Java Questions
  const javaQuestions = [
    {
      id: 1,
      question: "What is Java?",
      options: [
        "Programming Language",
        "Operating System",
        "Database",
        "Hardware",
      ],
      answer: "Programming Language",
    },
    {
      id: 2,
      question: "Which keyword is used to prevent method overriding?",
      options: ["final", "abstract", "static", "private"],
      answer: "final",
    },
    {
      id: 3,
      question:
        "Which data type is used to create a variable that should store text?",
      options: ["String", "int", "char", "boolean"],
      answer: "String",
    },
    {
      id: 4,
      question: "Which of the following is not a Java keyword?",
      options: ["delegate", "volatile", "native", "interface"],
      answer: "delegate",
    },
    {
      id: 5,
      question: "What is the default value of byte datatype in Java?",
      options: ["0", "0.0", "null", "undefined"],
      answer: "0",
    },
    {
      id: 6,
      question: "Which of the following is a marker interface?",
      options: ["Runnable", "Serializable", "Comparable", "Cloneable"],
      answer: "Serializable",
    },
    {
      id: 7,
      question: "What does JVM stands for?",
      options: [
        "Java Virtual Machine",
        "Java Virtual Memory",
        "Java Variable Memory",
        "Java Verified Machine",
      ],
      answer: "Java Virtual Machine",
    },
    {
      id: 8,
      question: "Which operator is used to allocate memory to an object?",
      options: ["new", "alloc", "malloc", "create"],
      answer: "new",
    },
    {
      id: 9,
      question:
        "Which method is used to compare two strings for their equality?",
      options: ["equals()", "compare()", "isEqual()", "compareTo()"],
      answer: "equals()",
    },
    {
      id: 10,
      question: "What is the superclass of all exception classes?",
      options: ["Throwable", "Error", "Exception", "RuntimeException"],
      answer: "Throwable",
    },
  ];

  // Python Questions
  const pythonQuestions = [
    {
      id: 1,
      question: "What is Python?",
      options: [
        "Programming Language",
        "Operating System",
        "Database",
        "Hardware",
      ],
      answer: "Programming Language",
    },
    {
      id: 2,
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "function", "def", "define"],
      answer: "def",
    },
    {
      id: 3,
      question: "Which of the following is not a Python data type?",
      options: ["int", "double", "str", "list"],
      answer: "double",
    },
    {
      id: 4,
      question: "How do you start a comment in Python?",
      options: ["//", "/*", "#", "--"],
      answer: "#",
    },
    {
      id: 5,
      question: "Which of the following is used to loop through a sequence?",
      options: ["for", "foreach", "while", "loop"],
      answer: "for",
    },
    {
      id: 6,
      question: 'What is the output of `print(3 * "Python")`?',
      options: ["3Python", "PythonPythonPython", "3 Python", "Error"],
      answer: "PythonPythonPython",
    },
    {
      id: 7,
      question: "Which method is used to remove an item from a list?",
      options: ["delete()", "remove()", "pop()", "discard()"],
      answer: "remove()",
    },
    {
      id: 8,
      question: "What is the result of `3 + 2 * 2`?",
      options: ["7", "10", "9", "6"],
      answer: "7",
    },
    {
      id: 9,
      question: "Which library is used for data visualization in Python?",
      options: ["matplotlib", "numpy", "pandas", "scipy"],
      answer: "matplotlib",
    },
    {
      id: 10,
      question: 'What is the output of `bool("False")`?',
      options: ["True", "False", "Error", "0"],
      answer: "True",
    },
  ]; // PHP Questions
  const phpQuestions = [
    {
      id: 1,
      question: "What does PHP stand for?",
      options: [
        "Personal Home Page",
        "Hypertext Preprocessor",
        "Public Hosting Platform",
        "Personal Hypertext Processor",
      ],
      answer: "Hypertext Preprocessor",
    },
    {
      id: 2,
      question: "Which of the following is not a valid PHP variable name?",
      options: ["$my_variable", "$_myVariable", "$MyVariable", "$my-variable"],
      answer: "$my-variable",
    },
    {
      id: 3,
      question:
        "Which function is used to redirect the user to a different URL in PHP?",
      options: ["redirect()", "location()", "header()", "forward()"],
      answer: "header()",
    },
    {
      id: 4,
      question: "What is the default method for sending form data in PHP?",
      options: ["GET", "POST", "REQUEST", "SUBMIT"],
      answer: "GET",
    },
    {
      id: 5,
      question: "Which PHP function is used to open a file?",
      options: ["open()", "read()", "fopen()", "load()"],
      answer: "fopen()",
    },
    {
      id: 6,
      question: "How do you get the length of a string in PHP?",
      options: ["strlen()", "length()", "strlength()", "stringLength()"],
      answer: "strlen()",
    },
    {
      id: 7,
      question: "Which of the following is used to comment in PHP?",
      options: ["//", "/* */", "#", "--"],
      answer: "//",
    },
    {
      id: 8,
      question:
        "Which PHP superglobal variable is used to get the value of form input field?",
      options: ["$_POST", "$_GET", "$_REQUEST", "$_SERVER"],
      answer: "$_POST",
    },
    {
      id: 9,
      question: "What is the correct way to close a PHP tag?",
      options: ["?>", "</php>", "<php>", "</?>"],
      answer: "?>",
    },
    {
      id: 10,
      question: "What is the correct way to start a PHP block?",
      options: ["<?php", "<?", "<?=", "<? echo"], // Updated the options
      answer: "<?php", // Updated the answer
    },
  ];

  // JavaScript Questions
  const javaScriptQuestions = [
    {
      id: 1,
      question: "What is JavaScript?",
      options: [
        "A programming language",
        "A markup language",
        "A style sheet language",
        "A scripting language",
      ],
      answer: "A scripting language",
    },
    {
      id: 2,
      question: "Which keyword is used to declare variables in JavaScript?",
      options: ["var", "int", "string", "float"],
      answer: "var",
    },
    {
      id: 3,
      question: 'What is the result of the expression: 3 + "3" in JavaScript?',
      options: ["6", '"33"', "33", "Error"],
      answer: '"33"',
    },
    {
      id: 4,
      question:
        "Which built-in method removes the last element from an array and returns that element in JavaScript?",
      options: ["pop()", "get()", "remove()", "delete()"],
      answer: "pop()",
    },
    {
      id: 5,
      question: 'What is the output of console.log(1 + "2" + "2")?',
      options: ["122", "5", '"122"', "Error"],
      answer: '"122"',
    },
    {
      id: 6,
      question:
        'What will the following code output: console.log("1" - - "1")?',
      options: ["2", "11", "10", '"11"'],
      answer: "2",
    },
    {
      id: 7,
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "/* */", "#", "--"],
      answer: "//",
    },
    {
      id: 8,
      question: 'What is the output of console.log(3 * "3")?',
      options: ["9", '"9"', "33", "Error"],
      answer: "9",
    },
    {
      id: 9,
      question:
        "Which built-in method reverses the order of the elements of an array in JavaScript?",
      options: ["reverse()", "sort()", "slice()", "push()"],
      answer: "reverse()",
    },
    {
      id: 10,
      question:
        'What is the result of the expression: 3 === "3" in JavaScript?',
      options: ["true", "false", "Error", "null"],
      answer: "false",
    },
  ];

  // Determine questions based on id
  const questions =
    id === "JV3070"
      ? javaQuestions
      : id === "PH3040"
      ? phpQuestions
      : id === "JS3090"
      ? javaScriptQuestions
      : pythonQuestions;

  // State for selected options and page navigation
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // State for score details and modal
  const [scoreDetails, setScoreDetails] = useState({
    correctCount: 0,
    wrongCount: 0,
    totalQuestions: 0,
    score: 0,
  });
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);

  // Total pages and progress
  const questionsPerPage = 2;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const progress = (currentPage / totalPages) * 100;

  // Handle option change
  const handleOptionChange = (questionId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: option,
    });
  };

  // Calculate score
  const calculateScore = () => {
    let correctCount = 0;
    let wrongCount = 0;

    questions.forEach((question) => {
      const selectedOption = selectedOptions[question.id];
      if (selectedOption === question.answer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const totalQuestions = questions.length;
    const score = (correctCount / totalQuestions) * 100;

    return {
      correctCount,
      wrongCount,
      totalQuestions,
      score,
    };
  };

  // Handle form submission
  const handleSubmit = () => {
    const { correctCount, wrongCount, totalQuestions, score } =
      calculateScore();
    setScoreDetails({
      correctCount,
      wrongCount,
      totalQuestions,
      score,
    });
    setIsScoreModalOpen(true);
  };

  // Render questions
  const renderQuestions = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;

    return questions.slice(startIndex, endIndex).map((questionObj, index) => (
      <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg">
        <strong className="block mb-2">Question {questionObj.id}:</strong>
        <p className="mb-2">{questionObj.question}</p>
        <ul className="list-disc pl-5">
          {questionObj.options.map((option, optionIndex) => (
            <li key={optionIndex} className="mb-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name={`question${questionObj.id}`}
                  value={option}
                  checked={selectedOptions[questionObj.id] === option}
                  onChange={() => handleOptionChange(questionObj.id, option)}
                  className="mr-2"
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  // Page navigation handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Toggle score modal
  const toggleScoreModal = () => {
    setIsScoreModalOpen(!isScoreModalOpen);
  };

  // Render score modal content
  const renderScoreDetailsModal = () => {
    // Calculate score
    const { correctCount, wrongCount, totalQuestions, score } =
      calculateScore();

    // Determine pass or fail
    const passOrFail = score >= 45 ? "Pass" : "Fail";

    const handleStartQuiz = () => {
      navigate(`/quizeHome/${id}`);
      console.log(id);
    };
    

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-gray-900 rounded-lg p-12 max-w-md">
          {/* Gif added here */}
          <img src={welldone_gif} alt="Well Done" className="mx-auto mb-8" />
          <h2 className="text-xl font-bold mb-4">Result</h2>
          <p>Total Questions: {totalQuestions}</p>
          <p>Correct Answers: {correctCount}</p>
          <p>Wrong Answers: {wrongCount}</p>
          <p>Total Score: {score.toFixed(2)}%</p>
          <p
            className={
              passOrFail === "Pass" ? "text-green-500" : "text-red-500"
            }
          >
            {passOrFail}
          </p>
          {passOrFail === "Fail" && (
            <button
              className="mt-4 mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => handleStartQuiz()}
            >
              Try Again
            </button>
          )}
          <button
            className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
            onClick={toggleScoreModal}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-gray-100 py-8">
      <AdminDashboard />
      <h1 className="text-3xl font-bold ">Answer all the questions</h1>
      <Clock />
      {/* Progress bar */}
      <div className="min-w-96 bg-gray-300 h-3 mt-2 rounded-md">
        <div
          className="bg-amber-400 h-full rounded-md"
          style={{ width: `${progress}%` }}
        ></div>
      </div><br></br>
      <div className="w-full max-w-screen-md">{renderQuestions()}</div>
      <div className="flex justify-center space-x-4 mt-6">
        <button
          className={`px-4 py-2 bg-green-800 text-white rounded transition duration-300 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg">
          {currentPage} / {totalPages}
        </span>
        <button
          className={`px-8 py-2 bg-blue-900 text-white rounded transition duration-300 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        {currentPage === totalPages && (
          <button
            className="px-4 py-2 bg-stone-500 text-white rounded transition duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
      {/* Score details modal */}
      {isScoreModalOpen && renderScoreDetailsModal()}
      
    </div>
  );
};

export default Questions;
