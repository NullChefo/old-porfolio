import React from "react";
import TableApplications from "../components/TableApplications";

function Applications() {
  return (
    <>
      <div className="application-text-area">
        <div className="container text-center mb-5">
          <h4 className="text-center">Up & Running Applications</h4>
        </div>
      </div>

      <TableApplications />
    </>
  );
}

export default Applications;
