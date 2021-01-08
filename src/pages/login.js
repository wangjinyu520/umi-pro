import React from "react";
import "./login.less";
import { Form, Input, Button, Checkbox, message } from "antd";
import { connect } from "dva"; //通过connect注册使用model里面的方法
// 函数申明的组件使用connect
export default connect()((props) => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const loginLayout = {
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      span: 16,
    },
  };
  const onFinish = (values) => {
    props.dispatch({ type: "user/login", payload: values }); //调用处理逻辑的方法，connect里面什么也不传的时候，至少有一个dispatch在this.props上面
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-login">
      <Form
        {...layout}
        name="basic"
        className="login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h2>登录</h2>
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "用户名必填",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "密码必填",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住密码</Checkbox>
        </Form.Item> */}

        <Form.Item {...loginLayout}>
          <Button type="primary" htmlType="submit" className="login-btn">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});
