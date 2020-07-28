import React, { Component } from "react";
import FormContext from "./context/formContext";

export default class FormItem extends Component {
  static contextType = FormContext;

  componentDidMount() {
    this.context.addFormItem(this);
  }

  componentWillUnmount() {
    this.context.removeFormItem(this);
  }

  onStoreChange = () => {
    this.forceUpdate();
  };

  renderChildren() {
    const { children, name } = this.props;

    const _children = React.cloneElement(children, {
      value: this.context.getFieldValue(name),
      onChange: (e) => {
        this.context.setFieldsValue({ [name]: e.target.value });
      },
    });

    return _children;
  }

  render() {
    return this.renderChildren();
  }
}
