import React, { Component } from "react";

export default function createForm(Comp) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {};
      this.options = {};
    }

    handleChange = (e) => {
      const { name, value } = e.target;

      this.setState({ [name]: value });
    };

    getFieldDecorator = (field, option) => (formComp) => {
      this.options[field] = option;

      return React.cloneElement(formComp, {
        name: field,
        value: this.state[field] || "",
        onChange: this.handleChange,
      });
    };

    setFieldsValue = (newStore) => {
      this.setState(newStore);
    };

    getFieldsValue = () => {
      return this.state;
    };

    // 今日暗号：西撒哈拉
    validateFields = (callback) => {
      const errors = [];

      Object.keys(this.options).forEach((key) => {
        const { rules } = this.options[key];

        if (!Array.isArray(rules)) {
          return;
        }

        rules.forEach((rule) => {
          if (rule.required) {
            if (!this.state[key]) {
              errors.push({ [key]: rule.message });
            }
          }
        });
      });

      if (errors.length > 0) {
        callback(errors, this.state);
      } else {
        callback(null, this.state);
      }
    };

    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields,
        },
      };
    };

    render() {
      return <Comp {...this.props} {...this.getForm()} />;
    }
  };
}
