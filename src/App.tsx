import React, { FC, useState, useEffect } from "react";
import "./App.less";
import { Layout, Menu } from "antd";
import MapContent from "./components/MapContent";
import { Geo } from "./models/geo";
import { Company } from "./models/company";

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  const [geo, setGeo] = useState({ features: [], type: "" } as Geo<Company>);
  useEffect(() => {
    if (process.env.REACT_APP_SERVER)
      fetch(`${process.env.REACT_APP_SERVER}/companies`)
        .then((response) => response.json() as Promise<Geo<Company>>)
        .then((data) => {
          setGeo(data);
        })
        .catch(console.error);
  });

  return (
    <div className="App">
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Companies</Menu.Item>
          </Menu>
        </Header>
        <Content className="main-content">
          <MapContent geo={geo}></MapContent>
        </Content>
        <Footer className="footer">flatmap.io 2020</Footer>
      </Layout>
    </div>
  );
};

export default App;
