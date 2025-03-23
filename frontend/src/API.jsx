const API_URL = "http://localhost:3001"; // Backend URL

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    return response.json();
};




export const loginUser = async (userData) => {
    const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("token", data.token); // Save JWT token
        localStorage.setItem("user", JSON.stringify(data.user)); // Save user info
        window.location.href = "https://stock-dashbord.netlify.app/"; // Redirect to Dashboard (Change port if needed)
    }

    return data;
};


export const getProfile = () => API.get("/profile"); // Fetch user data if needed