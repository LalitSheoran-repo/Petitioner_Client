
import React, { useState, useEffect } from 'react';
import JsonData from "./Demo.json";

import ReactPaginate from "react-paginate";
import axios from 'axios';
import "./tabComponent.css";
const FeaturedTab = () => {
  
  
  const [users, setUsers] = useState(JsonData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="card mb-3" style={{width: '50%',   marginLeft: '362px',marginTop:'29px', borderRadius:"20px"}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Image
            </text>
          </svg>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card </h5>
            <p className="card-text">
              Card Text
            </p>
            <p className="card-text">
              <small className="text-muted">Card Text 2</small>
            </p>
          </div>
        </div>
      </div>
    </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="FirstTab">
       {displayUsers}
       <div style={{ marginTop: '46px',marginLeft: '141px'}}>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
    </div>
  );
};
export default FeaturedTab;