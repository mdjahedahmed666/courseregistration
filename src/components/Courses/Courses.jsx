import { useEffect } from "react";
import { useState } from "react"
import { Course } from "../Course/Course";
import PropTypes from 'prop-types';

export const Courses = ({handleClick}) => {
    const [course, setCourses] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])
  return (
    <div className="md:w-2/3">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {course.map(course=><Course key={course.id} course={course} handleClick={handleClick}></Course>)}
        </div>
    </div>
  )
}
Courses.PropTypes =  {
  handleClick : PropTypes.func
}
