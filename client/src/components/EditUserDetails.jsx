import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { showErrorToast, showSuccessToast } from "./services/AlertService";

const EditUserDetails = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [address, setAddress] = useState("");
    const { userId } = useParams();

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
                `http://localhost:5000/users/api/v1/user-service/getOneUser/${userId}`,
                { headers }
            );

            const { firstname, lastname, email, telephone, address } =
                response.data.data;
            setFirstName(firstname);
            setLastName(lastname);
            setEmail(email);
            setTelephone(telephone);
            setAddress(address);
        } catch (error) {
            console.error("Error fetching user details:", error);
            showErrorToast("Error fetching user details");
        }
    };

    const handleUpdateUserDetails = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token") || "";

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
                `http://localhost:5000/users/api/v1/user-service/updateUser/${userId}`,
                updatedUserData,
                { headers }
            );

            showSuccessToast("User details updated:");
            navigate("/userManagement");
        } catch (error) {
            console.error("Error updating user details:", error);
            showErrorToast("Error updating user details");
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="ugf-container-wrap flex items-center justify-center min-h-screen">
                        <div className="ugf-container border-2 border-gray-200 rounded-lg">
                            <div className="ugf-content ugf-content-reg p-8">
                                <p className="text-lg text-gray-500">
                                    Update your account information here.
                                </p>
                            </div>
                            <div className="ugf-form p-8">
                                <h3 className="text-2xl font-bold mb-8">Edit User Details</h3>
                                <form onSubmit={handleUpdateUserDetails}>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                                placeholder="First Name"
                                                value={firstname}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                                placeholder="Last Name"
                                                value={lastname}
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                                placeholder="Email Address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="telephone"
                                                className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                                placeholder="Telephone"
                                                value={telephone}
                                                onChange={(e) => setTelephone(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="address"
                                                className="form-control py-3 px-4 border border-gray-300 rounded-md w-full"
                                                placeholder="Address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-full h-12 font-medium"
                                    >
                                        Update User Details
                                    </button>
                                </form>
                                <div className="alternet-access mt-4">
                                    <p>
                                        Go back to your account?{" "}
                                        <Link to="/account" className="text-blue-500">
                                            &nbsp; Account
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

export default EditUserDetails;