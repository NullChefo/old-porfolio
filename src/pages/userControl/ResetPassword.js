import { React, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Enter your email");
      return;
    }

    // onAdd({ email })

    setEmail("");
  };

  return (
    <div className="forms">
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <Link
            to="./login"
            className="nav-link"
            id="tab-login"
            data-mdb-toggle="pill"
            role="tab"
            aria-controls="pills-login"
            aria-selected="false"
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
              <p className="text-center" style={{ fontWeight: "bold" }}>
                Enter your email to reset your password:
              </p>
              <p>Email:</p>
              <input
                type="email"
                id="loginName"
                className="form-control"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
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
                <p>
                  Already a member? <Link to="./login">Login</Link>
                </p>
              </div>
            </div>

            <div className="text-center">
              <input
                type="submit"
                value="Reset"
                className="btn btn-primary btn-block mb-4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
