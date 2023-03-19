
import { Card, Rate, Tag, Row } from "antd";
import { useNavigate } from "react-router-dom";

export const CourseCard = ({ course }) => {
  const { Meta } = Card;
  const navigate = useNavigate();
  const {
    id,
    title,
    lessonsCount,
    rating,
    previewImageLink,
    description,
    meta
  } = course;

  const handleClick = () => {
    navigate(`course/${id}`);
  };
  const BodyStyle = {
    width: "100%", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-between"
  }

  const CardStyle = { 
    display: "flex", 
    maxWidth: "900px", 
    margin: "10px auto", 
    alignContent: "space-between"
  }

  const CoverStyle = {
    width: 300, 
    position: "relative", 
    top: "50%", 
    transform: "translateY(-50%)"
  }

  const TagStyle = {
    margin: "2px 2px 2px 0"
  }

  return (
    <Card
      bodyStyle={BodyStyle}
      onClick={handleClick}
      hoverable
      style={CardStyle}
      cover={<img 
        alt={title} 
        src={previewImageLink + '/cover.webp'} 
        style={CoverStyle}/>}
    >
      <Meta title={title} description={description}/>
       <Row>
          {meta.skills && meta.skills.map((skill) => (
            <Tag key={skill} 
              color="geekblue" 
              style={TagStyle}
            >
              {skill}
            </Tag>
          ))}
       </Row>

      <Row justify="space-between" align="middle">
        <Tag color="green">{lessonsCount} Lessons</Tag>
        <Rate allowHalf disabled defaultValue={rating} />
      </Row>
    </Card>
  );
};

