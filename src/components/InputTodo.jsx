import React from "react";

// TODOを入力エリアのコンポーネント
export const InputTodo = (props) => {
  // 引数(props)を分割代入
  const { todoText, onChange, onClick, disabled } = props;

  // styles.cssから移植 ※JS形式で書くのでcssの記法とは異なる
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  return (
    <div style={style} className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
