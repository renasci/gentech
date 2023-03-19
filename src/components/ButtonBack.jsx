
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const history = useNavigate();
  const handleGoBack = () => {
    history(-1);
  };

  return (
    <Button onClick={handleGoBack} ghost>Go Back</Button>
  );
};

