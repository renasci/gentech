import { LessonCard } from "../components/LessonCard";
import { Row, Col } from "antd";
import { useLessons } from "../hook/useLessons";
import { LessonView } from "../components/LessonView";
import { useQueryLocation } from "../hook/useQueryLocation";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../hook/useLocalStorage";

export const Lesson = () => {
  
  const lessons = useLessons();
  const query = useQueryLocation();
  const {courseId} = useParams();
  const [courseProgress]  = useLocalStorage(courseId);
  
  const getOrder = () => {
    if(courseProgress === null 
      || typeof courseProgress !== "object") {
      return 1
    } else {
      for (const lesson of lessons) {
        if(courseProgress 
          && lesson.id in courseProgress 
          && courseProgress[lesson.id].completed) {
          continue
        } else {
          return lesson.order
        }
      }

      return 1
    }
  }
  
  let order = query.get('order') === null 
              ? getOrder() 
              : query.get('order');
  
  const ColCardStyle = {
    maxWidth: 300, 
    minWidth: 200
  };

  const ColViewStyle = {
    margin: "0 auto"
  }
  return (
    <Row wrap={false}> 
      <Col style={ColCardStyle}>
        { lessons.map((item) => {
          return (<LessonCard key={item.id} lesson={item} isActive={item.order == order}/>)
        })}
      </Col>
      <Col style={ColViewStyle}>
        {lessons.length 
        ? <LessonView lesson={lessons.find(item => item.order == order)}/>
        : null}
      </Col>
    </Row>
  )
}