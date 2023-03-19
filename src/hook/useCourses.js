import { useState, useEffect } from 'react';
import { useBearerToken } from './useBearerToken';

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const token = useBearerToken();
 
  useEffect(() => {
    async function fetchCourses() {
      if(!token) {
        return;
      }

      const response = await fetch("http://api.wisey.app/api/v1/core/preview-courses", {
        headers: {Authorization: `Bearer ${token}`},
        method: 'GET',
        redirect: 'follow'
      });
      const coursesData = await response.json();
      setCourses(coursesData.courses);
    }
    
    fetchCourses();
  }, [token]);

  return courses;
}