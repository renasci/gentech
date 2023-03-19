import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBearerToken } from './useBearerToken';
import { useSortLessons } from './useSortLessons';

export const useLessons = () => {
  const token = useBearerToken();
  const {courseId} = useParams();
  const [getSortedLessons, sortLessons] = useSortLessons();

  useEffect(() => {
    async function fetchCourses() {
      if(!token || !courseId) {
        return;
      }

      const response = await fetch(`http://api.wisey.app/api/v1/core/preview-courses/${courseId}`, {
        headers: {Authorization: `Bearer ${token}`},
        method: 'GET',
        redirect: 'follow'
      });
      const lessonsData = await response.json();
      sortLessons(lessonsData.lessons);
    }
    
    fetchCourses();
  }, [token]);

  return getSortedLessons;
}