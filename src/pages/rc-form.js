import React, { Component } from "react";

import { Input } from "antd";
import createForm from "../components/rc-form";

const nameRules = { required: true, message: "请输⼊姓名！" };
const passworRules = { required: true, message: "请输⼊密码！" };

class RCForm extends Component {
  submit = () => {
    const { validateFields } = this.props.form;

    validateFields((err, val) => {
      if (err) {
        console.log("err", err); //sy-log
      } else {
        console.log("校验成功", val); //sy-log
      }
    });
  };

  componentDidMount() {
    this.props.form.setFieldsValue({ username: "default" });
  }

  render() {
    console.log("props", this.props); //sy-log
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <h3>RCForm</h3>
        {getFieldDecorator("username", { rules: [nameRules] })(
          <Input placeholder="Username" />
        )}
        {getFieldDecorator("password", { rules: [passworRules] })(
          <Input placeholder="Password" />
        )}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export default createForm(RCForm);
