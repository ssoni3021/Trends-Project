import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navigation/Nav";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "India", // Default country value
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData && storedUserData.user) {
      setFormData(storedUserData.user);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.pincode) newErrors.pincode = "Pincode is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.country) newErrors.country = "Country is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Update localStorage with the new user data
      const updatedUserData = { user: formData };
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      alert("Profile updated successfully!");
      navigate("/");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Nav />
      <div className="user-profile-container">
        <h2>User Profile</h2>
        <form onSubmit={handleSubmit} className="user-profile-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              {errors.dob && <p className="error">{errors.dob}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
              {errors.city && <p className="error">{errors.city}</p>}
            </div>

            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                required
              />
              {errors.pincode && <p className="error">{errors.pincode}</p>}
            </div>

            <div className="form-group">
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                required
              />
              {errors.state && <p className="error">{errors.state}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Country:</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                {/* Add more countries as needed */}
              </select>
              {errors.country && <p className="error">{errors.country}</p>}
            </div>
          </div>
          <div className="profile-submit">
            <button type="submit">Update Profile</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
