import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setError } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Navigation/Nav";
import "./signin.css";
import Footer from "../../components/Footer/Footer";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      if (user) {
        dispatch(login(user));
        localStorage.setItem("userLogin", JSON.stringify({ loggedIn: true }));
        localStorage.setItem("userData", JSON.stringify({ user }));
        navigate("/");
      } else {
        dispatch(setError("Invalid credentials"));
      }
      setFormData({
        email: "",
        password: "",
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
      <main className="signin-signup-container">
        <div className="form-container">
          <div className="form">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
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
              {userError && <p className="error">{userError}</p>}

              <button type="submit">Sign In</button>
              <p>
                Don't have an account?{" "}
                <button onClick={() => navigate("/signup")}>Sign Up</button>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
