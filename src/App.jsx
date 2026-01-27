import React, { Component } from 'react';
import CourseCard from './CourseCard';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        {
          name: "DSA",
          price: 999,
          rating: 4.5,
          img: "/OIP (1).webp"
        },
        {
          name: "React",
          price: 799,
          rating: 4.7,
          img: "/OIP (2).webp"
        },
        {
          name: "Java",
          price: 699,
          rating: 4.3,
          img: "/OIP.webp"
        }
      ]
    };
  }

  render() {
    const { courses } = this.state;

    return (
      <div className="app">
        <div className="header">
          Course Catalog - 2500031371 - Simhi
        </div>

        <div className="section">
          {courses.map((course, index) => (
            <CourseCard key={index} data={course} />
          ))}
        </div>

        <div className="footer">
          © 2024 Course Catalog. All rights reserved.
        </div>
      </div>
    );
  }
}
