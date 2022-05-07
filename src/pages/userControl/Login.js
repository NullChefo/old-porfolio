import { React, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert("Enter your email or password");
      return;
    }

    // onAdd({ email, password })

    setEmail("");
    setPassword("");
  };

  return (
    <div className="forms">
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <Link
            to="./login"
            className="nav-link active"
            id="tab-login"
            data-mdb-toggle="pill"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
          >
            Login
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            to="./register"
            className="nav-link"
            id="tab-register"
            data-mdb-toggle="pill"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
          >
            Register
          </Link>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={onSubmit}>
            <div className="form-outline mb-4">
              <p>Email:</p>
              <input
                type="email"
                id="loginName"
                className="form-control"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <p>Password:</p>
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <p>
                    Not a member? <Link to="./register">Register</Link>
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <Link to="./reset-password">Forgot password?</Link>
              </div>
            </div>

            <div className="text-center">
              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-block mb-4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
