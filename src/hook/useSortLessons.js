import { useState } from "react";

export const useSortLessons = () => {
  const [lessons, setLessons] = useState([]);

  const setLessonsHandle = (lessons) => {
    lessons.sort((a, b) => {
      if(a.order > b.order) {
        return 1
      } else {
        return -1
      }
    });
  
    setLessons(lessons);
  }

  return [lessons, setLessonsHandle];
}