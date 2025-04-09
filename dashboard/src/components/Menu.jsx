import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../main.css";

const Menu = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsProfileDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
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

        // Redirect to frontend signup
        window.location.href = "https://shiny-yeot-e4ffd0.netlify.app/signup";
    };

    const menuItems = ["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"];

    const isActive = (route) => location.pathname === `/${route.toLowerCase()}`;

    return (
        <div className="menu-container">
            <img src="/logo.png" alt="Logo" style={{ width: "50px" }} />

            <div className="menus">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item}>
                            <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: "none" }}>
                                <p className={isActive(item) ? "menu selected" : "menu"}>
                                    {item}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>

                <hr />

                {/* User Profile Dropdown */}
                <div className="profile" onClick={handleProfileClick} ref={dropdownRef}>
                    <div className="avatar">{user ? user.name.charAt(0).toUpperCase() : "U"}</div>
                    <p className="username">{user?.name || "User"}</p>

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
