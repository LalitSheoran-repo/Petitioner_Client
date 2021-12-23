import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./tabComponent.css";
import "./mainstyle.css";
import { petitionFeaturedListFetch } from "../../../Redux/Actions/petitionListActions";
import {generatePublicUrl} from '../urlConfig';

const FeaturedTab = () => {
  const dispatch = useDispatch();
  const featuredPosts = useSelector((state) => state.petitionList.featured);

  const history = useHistory();

  console.log(featuredPosts);

  useEffect(() => {
    dispatch(petitionFeaturedListFetch());
  }, [dispatch]);

  const truncate = (str) => {
		return str?.length > 101 ? str.substr(0, 100) + "..." : str;
	};

  return (
    <div className="FirstTab">
    {
      featuredPosts.map((post) =>{
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
          <img src={generatePublicUrl(post.supportingMedia)}  alt="Avatar" style={{width:'100%',height:'250'}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.petitionTitle}</h5>
              <div className="card-text" dangerouslySetInnerHTML={{ __html: truncate(post.problemDetail)}} />
            </div>
          </div>
        </div>
      </div>
      )}
      )} 
    </div>
  );
}
export default FeaturedTab;
