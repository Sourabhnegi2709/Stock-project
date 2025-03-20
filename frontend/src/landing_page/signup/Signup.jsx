import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import Button from "@mui/material/Button";

const Signup = () => {
    const navigate = useNavigate(); // Initialize useNavigate()
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [hover, setHover] = useState(false);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/register", userData);
            localStorage.setItem("token", res.data.token);
            alert("Signup successful!");
            window.location.href = "http://localhost:5050"; // Redirect to dashboard after signup
        } catch (error) {
            alert(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="pt-[80px] flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center mt-[5rem]">
                <h1 className="text-[2.6rem] font-semibold text-[#424242] tracking-tighter">
                    Open a free demat and trading account online
                </h1>
                <p className="text-[1.3rem] mt-4 text-[#424242]">
                    Start investing brokerage free and join a community of 1.5+ crore investors and traders
                </p>
            </div>

            <div className="flex items-center justify-center p-7 gap-[3rem]">
                {/* Left-side Image (Always Visible) */}
                <img className="w-[40%]" src="/assets/signup.png" alt="Signup" />

                {/* Right-side Signup Form */}
                <div className="flex flex-col w-1/2">
                    <h1 className="pt-4 text-lg font-semibold md:pt-4 md:text-2xl md:font-medium">
                        Signup Now
                    </h1>

                    <form className="my-5" onSubmit={handleSignup}>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full border px-5 py-2 h-[50px] rounded mt-2"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border px-5 py-2 h-[50px] rounded mt-2"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full border px-5 py-2 h-[50px] rounded mt-2"
                            required
                        />

                        <Button
                            type="submit"
                            style={{
                                height: "3.5rem",
                                width: "30%",
                                marginTop: "2rem",
                                backgroundColor: hover ? "black" : "",
                                color: hover ? "white" : "",
                                transition: "all 0.3s ease-in-out",
                            }}
                            variant="contained"
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            Signup
                        </Button>
                    </form>

                    {/* Navigate to Login Page */}
                    <p className="text-center mt-3 text-[#424242]">
                        Already have an account?{" "}
                        <span
                            className="text-blue-600 cursor-pointer hover:underline"
                            onClick={() => navigate("/login")} // Navigate to Login Page
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;