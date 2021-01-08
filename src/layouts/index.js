import { Layout, Menu, Breadcrumb } from "antd";
import styles from "./index.css";
const { Header, Content, Footer } = Layout;
import React from "react";
import { Link } from "umi";

export default function index(props) {
  const pathname = props.location.pathname;
  // menus是下面渲染的路由
  const menus = [
    { path: "/home", name: "首页" },
    { path: "/users", name: "用户" },
    { path: "/about", name: "商品" },
  ];
  const selectedKeys = menus
    .filter((ele) => {
      if (ele.path == "/") {
        return ele.pathname === "/"; //路径是/的单另的处理
      }
      return pathname.startsWith(ele.path);
    })
    .map((ele) => ele.path);
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
          <Menu.Item key="/home">
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">商品</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">个人中心</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.content}>
        <div className={styles.contentMain}>{props.children}</div>
        {/* {props.children}就可以在组件中插入子组件的值 */}
      </Content>
      <Footer className={styles.footer}>@博地中心</Footer>
    </Layout>
  );
}
