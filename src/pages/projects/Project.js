import { React } from "react";

const Project = ({ repos }) => {
  // #TODO show pictures https://raw.githubusercontent.com/StefanKehayov/Balance-App/master/img/0.png

  // var counter = 1;
  // var img_url= 'https://raw.githubusercontent.com/' + repos.full_name +'/master/img/' + counter + '.png';

  var updatedAt = repos.updated_at;

  updatedAt = updatedAt.replace("T", " ");
  updatedAt = updatedAt.replace("Z", " ");

  return (
    <>
      {/* 


        
<div className="col">
<a href={repos.html_url}  style={{ textDecoration: 'none', color:'black' }} >
<div  className="card">

  <img src={img_url} className="card-img-top" alt="Not Found"  />
  
  <div className="card-body">
    <h5 className="card-title">{repos.name}</h5>
    <p className="card-text">{repos.description}</p>


    <p>Created At: </p> <h6>{repos.created_at}</h6>

<p>Updated At:  </p><h6>{repos.updated_at} </h6> 

<p>Used lang:{repos.language} </p>

<p>Forks: {repos.forks}</p>
<p>Watchers: {repos.watchers} </p>


  

  </div>
</div>
</a>
</div>

         */}

      <a href={repos.html_url} style={{ textDecoration: "none" }}>
        <div className="card">
          <header className="article-header">
            <div>
              <div className="category-title">
                <p className="text-center">*Click the card*</p>
              </div>
            </div>
            <h2 className="article-title">{repos.name}</h2>

            <div
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
              className="category-title"
            >
              <span className="date">{repos.description}</span>
            </div>
          </header>

          {repos.language === null ? (
            <div className="tags">
              {" "}
              <div> Other </div>
            </div>
          ) : (
            <div className="tags">
              <div>{repos.language}</div>
            </div>
          )}

          <div className="category-title">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              height="16"
              width="16"
              className="svgs"
            >
              <path d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>{" "}
            &nbsp;
            <span className="date">{repos.watchers_count}</span> &nbsp;
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              height="16"
              width="16"
              className="svgs"
            >
              <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            </svg>{" "}
            &nbsp;
            <span className="date">{repos.forks}</span> &nbsp;
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              height="16"
              width="16"
              className="svgs"
            >
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>{" "}
            &nbsp;
            <span className="date">{repos.stargazers_count}</span> &nbsp;
          </div>

          <div className="category-title">
            Updated At: &nbsp;
            <span className="date">{updatedAt}</span>
          </div>
        </div>
      </a>
    </>
  );
};
export default Project;
