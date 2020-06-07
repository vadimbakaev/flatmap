import React, { FC } from "react";
import "./App.less";
import { Layout, Menu } from "antd";
import MapContent from "./components/MapContent";

const { Header, Content, Footer } = Layout;

const App: FC = () => (
  <div className="App">
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Companies</Menu.Item>
        </Menu>
      </Header>
      <Content className="main-content">
        <MapContent></MapContent>
      </Content>
      <Footer className="footer">flatmap.io 2020</Footer>
    </Layout>
  </div>
);

export default App;
