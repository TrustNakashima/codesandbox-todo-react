import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // TODOを入力テキストのuseState
  const [todoText, setTodoText] = useState("");

  // 未完了のTODOリストのuseState
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了のTODOリストのuseState
  const [completeTodos, setCompleteTodos] = useState([]);

  // TODOを入力テキストの変更イベント
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンクリックイベント
  const onClickAdd = () => {
    // TODOを入力テキストが空だったら何もしない
    if (todoText === "") return;
    // 新しい配列を生成：「未完了のTODO配列＋入力テキスト」※...スプレッド構文
    const newTodos = [...incompleteTodos, todoText];
    // 未完了のTODOリストに新しい配列を設定
    setIncompleteTodos(newTodos);
    // TODOを入力テキストに空欄を設定
    setTodoText("");
  };

  // 削除ボタンクリックイベント
  const onClickDelete = (index) => {
    // 新しい配列を生成：「未完了のTODO配列」
    const newTodos = [...incompleteTodos];
    // 削除ボタンクリックされたindexの要素を配列から削除
    newTodos.splice(index, 1);
    // 未完了のTODOリストに新しい配列を設定
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンクリックイベント
  const onClickCmplete = (index) => {
    // 新しい配列を生成：「未完了のTODO配列」
    const newIncompleteTodos = [...incompleteTodos];
    // 完了ボタンクリックされたindexの要素を配列から削除
    newIncompleteTodos.splice(index, 1);

    // 新しい配列を生成：「完了のTODO配列＋完了ボタンクリックされた未完了のTODO要素」
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    // 各ステータスを設定
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタンクリックイベント
  const onClickBack = (index) => {
    // 新しい配列を生成：「完了のTODO配列」
    const newCompleteTodos = [...completeTodos];
    // 戻すボタンクリックされたindexの要素を配列から削除
    newCompleteTodos.splice(index, 1);

    // 新しい配列を生成：「未完了のTODO配列＋戻すボタンクリックされた完了のTODO要素」
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    // 各ステータスを設定
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* コンポーネント使用 */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは5個まで！</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickCmplete={onClickCmplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClick={onClickBack} />
    </>
  );
};
