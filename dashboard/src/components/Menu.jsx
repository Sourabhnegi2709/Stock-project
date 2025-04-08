import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../main.css";

const Menu = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleProfileClick = () => {
        setIsProfileDropdownOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        try {
            await fetch("https://stock-project-ry3n.onrender.com/logout", {
                method: "POST",
                credentials: "include",
            });
        } catch (err) {
            console.error("Logout failed:", err);
        }
    
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    
        // Redirect to Netlify signup page
        window.location.href = "https://shiny-yeot-e4ffd0.netlify.app/signup";
    };
    
    const isActive = (route) => {
        return location.pathname === `/${route.toLowerCase()}`;
    };

    return (
        <div className="menu-container">
            <img src="/logo.png" alt="Logo" style={{ width: "50px" }} />
            <div className="menus">
                <ul>
                    {["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"].map((item, index) => (
                        <li key={index}>
                            <Link
                                to={`/${item.toLowerCase()}`}
                                style={{ textDecoration: "none" }}
                            >
                                <p className={isActive(item) ? "menu selected" : "menu"}>
                                    {item}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />

                {/* User Info Box */}
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">
                        {user ? user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                    <p className="username">{user ? user.name : "User"}</p>

                    {isProfileDropdownOpen && (
                        <div className="dropdown">
                            <p className="email">{user?.email || "No Email"}</p>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
