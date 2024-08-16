import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setError } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import Nav from "../../components/Navigation/Nav";
import Footer from "../../components/Footer/Footer";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "India", // Default country value
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userError = useSelector((state) => state.user.error);

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
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
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
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((user) => user.email === formData.email);
      if (existingUser) {
        dispatch(setError("Email already exists"));
      } else {
        const newUser = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          dob: formData.dob,
          address: formData.address,
          city: formData.city,
          pincode: formData.pincode,
          state: formData.state,
          country: formData.country,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        dispatch(login(newUser));
        // localStorage.setItem("userLogin", JSON.stringify({ loggedIn: true }));
        navigate("/signin");
      }
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
        address: "",
        city: "",
        pincode: "",
        state: "",
        country: "India",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    dispatch(setError(""));
  }, [dispatch]);

  return (
    <>
      <Nav />
      <main className="signup-container">
        <div className="form-container">
          <div className="form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
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
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="form-row">
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
              </div>

              <div className="form-row">
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
              </div>

              <div className="form-row">
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

              <button type="submit">Sign Up</button>
              {userError && <p className="error">{userError}</p>}

              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signin")}
                  className="btn-link"
                >
                  Sign In
                </button>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
