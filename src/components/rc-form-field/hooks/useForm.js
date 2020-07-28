import { useRef } from "react";

class FormStore {
  constructor() {
    this.state = {};
    this.formItems = [];
  }

  addFormItem = (formItem) => {
    this.formItems.push(formItem);
  };

  removeFormItem = (formItem) => {
    this.formItems = this.formItems.filter(
      (v) => v.props.name !== formItem.props.name
    );
    delete this.state[formItem.props.name];
  };

  getFieldValue = (name) => {
    return this.state[name];
  };

  setFieldsValue = (values) => {
    this.state = {
      ...this.state,
      ...values,
    };

    this.formItems.forEach((formItem) => {
      Object.keys(values).forEach((key) => {
        if (formItem.props.name === key) {
          formItem.onStoreChange();
        }
      });
    });
  };

  getForm() {
    return {
      addFormItem: this.addFormItem,
      removeFormItem: this.removeFormItem,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
    };
  }
}

export default function useForm(form) {
  const formRef = useRef();

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}
