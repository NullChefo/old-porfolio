import React from "react";

function Contacts() {
  return (
    <>
      <section id="contact1">
        <div className="container">
          <h3 className="text-center text-uppercase mb-5">contact me</h3>
          <p className="text-center w-75 m-auto">
            This is my contact page if you want to connect with me you can find
            my email and social medias below. You can also check my progress on
            GitHub.{" "}
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/stefan-kehayov-1743861b9/"
              >
                <div className="card1 border-0">
                  <div className="card1-body text-center">
                    <i
                      className="fa fa-linkedin-in fa-5x mb-3"
                      aria-hidden="true"
                    ></i>
                    <h4 className="text-uppercase mb-5">Linked in</h4>
                    <p> Connect with me </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card1 border-0">
                <div className="card1-body text-center">
                  <i
                    className="fa fa-map-marker fa-5x mb-3"
                    aria-hidden="true"
                  ></i>
                  <h4 className="text-uppercase mb-4">current loaction</h4>
                  <address>Dospat, Smolyan ,Bulgaria </address>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/StefanKehayov"
              >
                <div className="card1 border-0">
                  <div className="card1-body text-center">
                    <i
                      className="fa fa-github fa-5x mb-3"
                      aria-hidden="true"
                    ></i>
                    <h4 className="text-uppercase mb-5">GitHub</h4>
                    <address>Check my progress</address>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card1 border-0">
                <div className="card1-body text-center">
                  <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">email</h4>
                  <p>stefank.dev.acc@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
