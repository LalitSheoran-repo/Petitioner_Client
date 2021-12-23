import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signedPetitionsFetch } from "../../../Redux/Actions/startedSignedPetitions";


const Signed = () => {
  const dispatch = useDispatch();
  const signedPosts = useSelector((state) => state.startedSigned.signed);

  const history = useHistory();

  useEffect(() => {
    dispatch(signedPetitionsFetch());
  }, [dispatch]);

  const truncate = (str) => {
		return str?.length > 101 ? str.substr(0, 100) + "..." : str;
	};

  return (
    <div className="FirstTab">
    {
      signedPosts.map((post) =>{
        return(
      <div
        className="card mb-3"
        style={{ width: "50%", marginLeft: "362px", marginTop: "29px" }}
        onClick={() => {
                          history.push("/petitionDetail/"+post._id);
                        }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="250"
              xmlns="{post.supportingMedia}"
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
              <h5 className="card-title">{post.petitionTitle}</h5>
              <p className="card-text">{truncate(post.problemDetail).replace(/<[^>]+>/g, '')}</p>
            </div>
          </div>
        </div>
      </div>
      )}
      )} 
    </div>
  );
}
export default Signed;
