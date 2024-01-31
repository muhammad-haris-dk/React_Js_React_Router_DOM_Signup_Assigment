import React from "react";
import { Todo_Component } from "../Components/Todo_Component";
import "./Index.css"
export function Todo() {
  return (
    <div className="bg-transparent flex justify-center items-center bg">
      <div className="mt-10 inline-block bg-light rounded-lg backdrop:blur-md h-[90dvh]">
        <Todo_Component
          placeholder="Add Title"
          type="text"
          description="Add description"
          // addItems={addItems}
        />
      </div>
    </div>
  );
}
