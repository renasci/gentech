
import { useEffect } from 'react';
import { CourseCard } from '../components/CourseCard';
import { useCourses } from '../hook/useCourses';
import { usePagination } from '../hook/usePagination';

export const Courses = () => {
  const allCourses = useCourses();
  const [PaginationTrigger, courses, setCourses] = usePagination(10);

  useEffect(() => {
    if(allCourses.length) {
      setCourses(allCourses);
    }
  },[allCourses]);
  
  return (
    <>
      {courses.map((item) => {
        return (<CourseCard course={item} key={item.id}/>)
      })}
      <PaginationTrigger />
    </>

  )
}