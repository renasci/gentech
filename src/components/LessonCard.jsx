
import { Card } from "antd";
import { MaskDisabled } from "./MaskDisabled";
import { useSearchParams } from "react-router-dom";
import { memo } from "react";

export const LessonCard = memo(({ lesson, isActive }) => {
  const { Meta } = Card;
  const [searchParams, setSearchParams] = useSearchParams();
  const {order, title, status} = lesson;

  const handleClick = status === "locked" 
  ? null
  : () => {
    setSearchParams({'order': order});
  };

  const activeStyle = isActive 
  ? {backgroundColor: "rgba(100, 226, 100, 0.5)"}
  : {};
  
  const CardStyle = {
    margin: 10, 
    padding: 0, 
    position: "relative", 
    boxSizing: "border-box"
  }
  
  return (
    <Card
      style={activeStyle}
      hoverable = {status === "locked" ? false : true}
      bodyStyle={CardStyle}
      onClick={handleClick}
    >
      {
        status === "locked" 
        ? <MaskDisabled/>
        : null
      }
      <Meta title={`Lesson ${order}`} description={title} />
    </Card>
  );
});



