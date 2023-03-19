
import { Layout, Row } from 'antd';
import { ButtonBack } from '../components/ButtonBack.jsx';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  const { Header, Content, Footer } = Layout;
  const HeaderStyle = {
    color: "white"
  };
  const FooterStyle = {
    textAlign: "center"
  };

  const LayoutStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  };
  
  return (
    <Layout style={LayoutStyle}>
      <Header>
        <Row justify="space-between" align="middle">
          <ButtonBack/>
          <div style={HeaderStyle}>
            Awesome lessons
          </div>
        </Row> 
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer style={FooterStyle}>© Awesome lessons</Footer>
    </Layout>
  )
}

export { PageLayout as Layout }