import React from "react";

function Home() {
  return (
    <div className="container">
      <section className="site-banner">
        <div className="container1">
          <div className="row">
            <div className="col-lg-6 col-md-12 site-title">
              <h3 className="title-text">Hey</h3>
              <h1 className="title-text text-uppercase">I am Stefan</h1>
              <h4 className="title-text text-uppercase">
                Software engineering student
              </h4>
              <div className="site-buttons">
                <div className="d-flex flex-row flex-wrap"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 banner-image">
              <img
                src="./Image.png"
                alt="banner-img"
                className="img-fluid"
                width="10rem"
                height="15rem"
              />{" "}
              {/* img-fluid */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
