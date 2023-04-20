import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate();

  const handleOnSubmitSignup = async (e) => {
    e.preventDefault();
    const signupURL = "http://localhost:3001/api/auth/createuser";
    if(e.target.password.value !== e.target.confirmpassword.value) {
        props.showAlert('Password Mismatch', 'warning')
        return
    }
    const response = await fetch(signupURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
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
      props.showAlert('Account created successfully', 'success')
    } else {
      props.showAlert(json.error, 'danger')
    }
  };

  return (
    <form onSubmit={handleOnSubmitSignup}>
      <div className="form-group">
        <h1>Create a free account to start using i-Notebook</h1>
        <label htmlFor="email">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter name"
          required
          minLength={3}
        />
      </div>
      <div className="form-group">
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
      <div className="form-group">
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Enter password again"
          required
          minLength={6}
        />
      </div>
      <button type="submit" className="btn btn-primary my-3">
        Signup
      </button>
    </form>
  );
};

export default Signup;
