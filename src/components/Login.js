import React from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

  let navigate = useNavigate();

  const handleOnSubmitLogin = async (e) => {
    e.preventDefault();
    const loginURL = "http://localhost:3001/api/auth/login";
    const response = await fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const json = await response.json();
    console.log(json);

     // the response is an object with a boolean parameter of success: true/false
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert('Logged in successfully', 'success')
    } else {
      props.showAlert(json.error, 'danger')
    }
  };

  return (
    <form onSubmit={handleOnSubmitLogin}>
      <div className="form-group">
        <h1>Login</h1>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter email"
          required
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter password"
          required
          minLength={6}
        />
      </div>
      <button type="submit" className="btn btn-primary my-3">
        Login
      </button>
    </form>
  );
};

export default Login;
