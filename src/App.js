import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/userControl/Login";
import Footer from "./components/Footer";

import Register from "./pages/userControl/Register";
import ResetPassword from "./pages/userControl/ResetPassword";

import Applications from "./pages/Applications";
import Experience from "./pages/Experience";
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <NavBar />
          <Route path="/" exact component={Home} />
        </div>

        <div className="">
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/experience" component={Experience} />
          <Route path="/project" component={Projects} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/applications" component={Applications} />
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
