import React from 'react';
import './CourseList.css'; // Import the CSS file for styling
import Main from '../layouts/Main';

const courses = [
  {
    name: 'CS 180',
    description: 'Algorithms and Complexity',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'CS 32',
    description: 'Data Structures',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'CS 131',
    description: 'Programming Languages',
    grade: 'A',
    school: 'UCLA'
  },
  {
    name: 'CS 111',
    description: 'Operating Systems',
    grade: 'A',
    school: 'UCLA'
  },
  {
    name: 'CS 118',
    description: 'Computer Networking',
    grade: 'A',
    school: 'UCLA'
  },
  {
    name: 'CS M146',
    description: 'Machine Learning',
    grade: 'A',
    school: 'UCLA'
  },
  {
    name: 'CS 143',
    description: 'Database Systems',
    grade: 'A',
    school: 'UCLA'
  },
  {
    name: 'CS 35L',
    description: 'Software Construction',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'CS 181',
    description: 'Theoretical Computer Science (Automata Theory)',
    grade: 'A',
    school: 'UCLA'
  },
  {
    name: 'CS 161',
    description: 'Artificial Intelligence',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'CS 174A',
    description: 'Computer Graphics',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'CS M51A',
    description: 'Logical Design of Digital Systems',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'EE 3',
    description: 'Introduction to Electrical Engineering',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'EE 100',
    description: 'Electrical and Electronic Circuits',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'C&EE 110',
    description: 'Probability and Statistics',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'CS M152A',
    description: 'Digital Design Lab',
    grade: 'A+',
    school: 'UCLA'
  },
  {
    name: 'CS M148',
    description: 'Data Science',
    grade: 'A',
    school: 'UCLA'
  },
];

const CourseList = () => {
  return (
    <Main
        title="Courses"
        description="Nima's courses"
    >
    <article className="post" id="courses">
        <div className="course-list">
        {courses.map((course, index) => (
            <div className="course" key={index}>
            <h3 className="course-name">{course.description}</h3>
            <p className="course-description">{course.name}</p>
            <span className="course-grade">Grade: {course.grade}</span>
            <p className="course-school">School: {course.school}</p>
            </div>
        ))}
        </div>
    </article>
    </Main>
  );
};

export default CourseList;
