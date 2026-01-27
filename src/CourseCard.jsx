import React from "react";
import "./CourseCard.css";

const CourseCard = ({ data }) => {
  return (
    <div className="course-card">
      <img src={data.img} alt={data.name} />
      <div className="course-content">
        <h3>{data.name}</h3>
        <p className="price">₹{data.price}</p>
        <p className="rating">⭐ {data.rating}</p>
        <button className="course-btn">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
