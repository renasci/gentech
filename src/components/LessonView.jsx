import { Video } from './Video';

export const LessonView = ({lesson}) => {
  const { link, order, duration, status, id} = lesson;
  
  return (
    <>
      <h1>{`Lesson ${order}`}</h1>
      {
        status === "locked"
        ? <div>Please unlock the lesson</div>  
        : <Video src={link} id={id} duration={duration}></Video>
      }      
    </>
  )
}

