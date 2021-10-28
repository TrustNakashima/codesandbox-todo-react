import React from "react";

// 未完了のTODOエリアのコンポーネント
export const IncompleteTodos = (props) => {
  // 引数(props)を分割代入
  const { todos, onClickCmplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* map：第一引数に配列の要素、第二引数に配列のindexが取得できるルール */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              {/* onClick={onClickDelete(index)だとクリックしなくてもイベント発火するため、関数化する} */}
              <button onClick={() => onClickCmplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
