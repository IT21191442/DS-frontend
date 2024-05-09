import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { showErrorToast, showSuccessToast } from "./services/AlertService";

const UserProfile = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetchUserDetails();
    }, []);


    const fetchUserDetails = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("Token is missing in localStorage");
                return;
            }

            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const response = await axios.get(
                "http://localhost:5000/users/api/v1/user-service/profile",
                { headers }
            );

            const { firstname, lastname, email, telephone, address, role } = response.data.data;
            setFirstName(firstname);
            setLastName(lastname);
            setEmail(email);
            setTelephone(telephone);
            setAddress(address);
            setRole(role);

        } catch (error) {
            console.error("Error fetching user details:", error);
            showErrorToast("Error fetching user details");
        }
    };

    const handleUpdateDetails = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("Token is missing in localStorage");
                return;
            }

            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const updatedUserData = {
                firstname,
                lastname,
                email,
                telephone,
                address,
            };

            const response = await axios.put(
                "http://localhost:5000/users/api/v1/user-service/updateUser",
                updatedUserData,
                { headers }
            );

            showSuccessToast("User details updated successfully");
        } catch (error) {
            console.error("Error updating user details:", error);
            showErrorToast("Error updating user details");
        }
    };

    const handleCancel = () => {
        const role = localStorage.getItem("role");
        if (role === 'user') {
            navigate('/userHomePage');
        }
        else {
            navigate('/AdminDashboard');
        }
    }

    return (
        <div className="mx-auto bg-gray-800">
            <div className="flex justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="ugf-container-wrap flex items-center justify-center min-h-screen">
                        <div className="ugf-container border-2 border-gray-200 bg-gray-200 rounded-lg shadow-lg">
                            <div className="ugf-content ugf-content-reg p-8">
                                <p className=" text-gray-900 font-bold text-2xl">
                                    Your account information:
                                </p>
                            </div>
                            <div className="ugf-form p-8">
                                <h3 className="text-2xl font-bold mb-8">User Profile</h3>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="form-group">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                            value={firstname}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                            value={lastname}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Telephone
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                            value={telephone}
                                            onChange={(e) => setTelephone(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="block text-gray-700 font-bold mb-2">
                                            Role
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                            value={role}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="button"
                                        className="btn bg-red-800 hover:bg-red-700 text-white px-20 py-2 rounded mr-4"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn bg-blue-950 hover:bg-blue-900 text-white px-20 py-2 rounded"
                                        onClick={handleUpdateDetails}
                                    >
                                        Update
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;