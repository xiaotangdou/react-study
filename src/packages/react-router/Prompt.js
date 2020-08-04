import React from "react";
import RouterContext from "./RouterContext";

export default function Prompt(props) {
  const { message, when = true } = props;

  return (
    <RouterContext.Consumer>
      {(context) => {
        if (!when) {
          return null;
        }

        const method = context.history.block;

        // render方法返回的必须是一个react component，这里使用 Lifecycle 代替
        return (
          <Lifecycle
            // 组件渲染成功后执行一次confirm，并拿到销毁的回调函数
            onMount={(self) => (self.release = method(message))}
            // 组件更新成功后进行block的卸载后再次挂载
            onUpdate={(self, prevProps) => {
              if (prevProps.message !== message) {
                self.release();
                self.release = method(message);
              }
            }}
            onUnmount={(self) => {
              self.release();
            }}
            message={message}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}

class Lifecycle extends React.Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.onUpdate) {
      this.props.onUpdate.call(this, this, prevProps);
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount.call(this, this);
    }
  }

  render() {
    return null;
  }
}
