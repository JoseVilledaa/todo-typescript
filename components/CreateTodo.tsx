import React from "react";
import { TodoTitle } from "../types";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = React.useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    saveTodo({
        title: inputValue,
        });
    setInputValue("");
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="¿Qué necesitas hacer?"
          autoFocus
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value);}}
        />
      </form>
    </>
  );
};
