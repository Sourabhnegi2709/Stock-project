import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false); // ✅ Add loading state
    const [error, setError] = useState(null); // ✅ Store error message

    const [hover, setHover] = useState(false);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // ✅ Prevent multiple submissions
        setError(null); // Clear previous errors

        try {
            const res = await axios.post("http://localhost:3001/login", userData, {
                withCredentials: true, // ✅ Send cookies with request
                
            });
            

            // ✅ Store user info & token in localStorage
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("Login successful!");
            // window.location.href = "http://localhost:5050";
            window.location.href = `http://localhost:5050?name=${encodeURIComponent(res.data.user.name)}&email=${encodeURIComponent(res.data.user.email)}`;

        } catch (error) {
            setError(error.response?.data?.message || "Login failed");
        } finally {
            setLoading(false); // ✅ Stop loading
        }
    };

    return (
        <div className="pt-[80px] flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center mt-[5rem]">
                <h1 className="text-[2.6rem] font-semibold text-[#424242] tracking-tighter">
                    Welcome Back! Login to Your Account
                </h1>
            </div>

            <div className="flex items-center justify-center p-7 gap-[3rem]">
                {/* Left-side Image */}
                <img className="w-[40%]" src="/assets/signup.png" alt="Login" />

                {/* Right-side Login Form */}
                <div className="flex flex-col w-1/2">
                    <h1 className="pt-4 text-lg font-semibold md:pt-4 md:text-2xl md:font-medium">
                        Login
                    </h1>

                    <form className="my-5" onSubmit={handleLogin}>
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

                        {/* Show error message if login fails */}
                        {error && <p className="text-red-500 mt-2">{error}</p>}

                        <Button
                            type="submit"
                            disabled={loading} // ✅ Disable button while loading
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
                            {loading ? "Logging in..." : "Login"} {/* ✅ Show loading text */}
                        </Button>
                    </form>

                    {/* Navigate to Signup Page */}
                    <p className="text-center mt-3 text-[#424242]">
                        Don't have an account?{" "}
                        <span
                            className="text-blue-600 cursor-pointer hover:underline"
                            onClick={() => navigate("/signup")}
                        >
                            Signup
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;