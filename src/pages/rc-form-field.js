import React from "react";

import { Button, Input } from "antd";

import Form from "../components/rc-form-field";

function App() {
  const onFinish = () => {};

  const onFinishFailed = () => {};

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item name="name">
        <Input />
      </Form.Item>

      <Form.Item name="password">
        <Input />
      </Form.Item>

      <Button>提交</Button>
    </Form>
  );
}

export default App;
