(function () {
  const onClickTodoItemAdd = () => {
    const todoText = document.getElementById("todo_Input_Text").value;

    if (todoText === "") return;
    document.getElementById("todo_Input_Text").value = "";
    createTodo(todoText);
  };

  const createTodo = (todoText) => {
    const li = document.createElement("li");
    const div_li = document.createElement("div");
    div_li.classList.add("div-li-row");

    const p = document.createElement("p");
    p.classList.add("todo-item");
    p.innerText = todoText;

    const btn_Complete = completeTodo();
    const btn_Delete = deleteTodo();

    div_li.appendChild(p);
    div_li.appendChild(btn_Complete);
    div_li.appendChild(btn_Delete);

    li.appendChild(div_li);

    return document.getElementById("ul_Incomlete").appendChild(li);
  };

  const completeTodo = () => {
    const btn_Complete = document.createElement("button");
    btn_Complete.innerText = "完了";
    btn_Complete.addEventListener("click", () => {
      const moveTarget = btn_Complete.closest("li");
      btn_Complete.nextElementSibling.remove();
      btn_Complete.remove();

      const btn_Back = backTodo();

      moveTarget.firstElementChild.appendChild(btn_Back);
      return document.getElementById("ul_Comlete").appendChild(moveTarget);
    });
    return btn_Complete;
  };

  const deleteTodo = () => {
    const btn_Delete = document.createElement("button");
    btn_Delete.innerText = "削除";
    btn_Delete.addEventListener("click", () => {
      const deleteTarget = btn_Delete.closest("li");
      document.getElementById("ul_Incomlete").removeChild(deleteTarget);
    });
    return btn_Delete;
  };

  const backTodo = () => {
    const btn_Back = document.createElement("button");
    btn_Back.innerText = "戻す";
    btn_Back.addEventListener("click", () => {
      const todoText = btn_Back.previousElementSibling.innerText;
      createTodo(todoText);
      const deleteTarget = btn_Back.closest("li");
      document.getElementById("ul_Comlete").removeChild(deleteTarget);
    });
    return btn_Back;
  };

  document
    .getElementById("button_Todo_Item_Add")
    ?.addEventListener("click", onClickTodoItemAdd);
})();
