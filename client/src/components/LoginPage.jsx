import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginPageImg from "../Images/login-page-img.jpg";
import { showErrorToast, showSuccessToast } from "./services/AlertService";
import { useState } from "react";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5000/users/api/v1/user-service/login",
                {
                    email: email,
                    password: password,
                }
            );

            const { data } = response.data;

            console.log(data);

            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.user.role);

            if (data.user.role === "admin") {
                showSuccessToast("Login successful!");
                setTimeout(() => {
                    navigate("/AdminDashboard");
                    window.location.reload();
                }, 2000);
            } else {
                showSuccessToast("Login successful!");
                setTimeout(() => {
                    navigate("/profile");
                    window.location.reload();
                }, 2000);
            }
        } catch (error) {
            navigate("/login");
            showErrorToast("Login Unsuccessfull!");
        }
    };

    return (
        <div className="container mx-auto">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="ugf-container-wrap flex items-center justify-center min-h-screen">
                        <div className="ugf-container flex border-2 border-gray-300 rounded-lg">
                            <div className="ugf-content bg-cover bg-no-repeat bg-center flex-1 p-10">
                                <div className="logo mb-6">
                                    <img src={LoginPageImg} alt="" />
                                </div>
                                <p className="text-gray-700 text-lg">
                                    Welcome back! Log in to your account to access our educational
                                    platform.
                                </p>
                            </div>
                            <div className="ugf-form flex-1 bg-white p-10">
                                <h3 className="text-3xl mb-8 font-extrabold">Sign In</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-4">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            id="input-mail"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            required
                                        />
                                        <label htmlFor="input-mail" className="text-gray-600">
                                            Email Address
                                        </label>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="password"
                                            name="inputPass"
                                            className="form-control w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            id="input-pass"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                            required
                                        />
                                        <label htmlFor="input-pass" className="text-gray-600">
                                            Password
                                        </label>
                                    </div>
                                    <div className="form-group flex items-center justify-between mb-4">
                                        <div className="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="customControlValidation1"
                                            />
                                            <label
                                                className="custom-control-label ml-2 cursor-pointer"
                                                htmlFor="customControlValidation1"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="forget-pass">
                                            <Link
                                                to="/forget"
                                                className="text-blue-500 hover:text-blue-700"
                                            >
                                                Forget password?
                                            </Link>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-full h-16 font-medium"
                                    >
                                        Login Account
                                    </button>
                                </form>
                                <div className="alternet-access mt-4">
                                    <p>
                                        Don't have an account?{" "}
                                        <Link
                                            to="/register"
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            &nbsp; Sign up Now!
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;