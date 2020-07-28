/**
 * antd4 的form实现方式
 *
 * 实现 form 容器
 *  store存放位置？
 *      不在挂载到form，单独实现一个formStore类进行存储,数据交互方法（form 实例），class和hooks方式均要实现
 *  state更新方式？
 *      不在通过form的setState更新，通过 context，forceUpdate，
 *
 * 实现 form item
 *  让表单变成受控组件
 *  收集表单变化的值，表单变化触发 onChange
 */

import Form from "./Form";
import FormItem from "./FormItem";
import useForm from "./hooks/useForm";

Form.Item = FormItem;
Form.useForm = useForm;

export { useForm };
export default Form;
