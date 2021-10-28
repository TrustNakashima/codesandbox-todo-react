import React from "react";

// 完了のTODOエリアのコンポーネント
export const CompleteTodos = (props) => {
  // 引数(props)を分割代入
  const { todos, onClick } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {/* map：第一引数に配列の要素、第二引数に配列のindexが取得できるルール */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              {/* onClick={onClick(index)だとクリックしなくてもイベント発火するため、関数化する} */}
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
