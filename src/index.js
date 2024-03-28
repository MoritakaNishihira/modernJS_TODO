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

  div_li.appendChild(p);
  div_li.appendChild(createCompleteButton());
  div_li.appendChild(createDeleteButton());

  li.appendChild(div_li);

  return document.getElementById("ul_Incomlete").appendChild(li);
};

const createCompleteButton = () => {
  const btn = document.createElement("button");
  btn.innerText = "完了";
  btn.addEventListener("click", () => {
    const moveTarget = btn.closest("li");
    btn.nextElementSibling.remove();
    btn.remove();

    moveTarget.firstElementChild.appendChild(createBackButton());
    return document.getElementById("ul_Comlete").appendChild(moveTarget);
  });
  return btn;
};

const createDeleteButton = () => {
  const btn = document.createElement("button");
  btn.innerText = "削除";
  btn.addEventListener("click", () => {
    const deleteTarget = btn.closest("li");
    document.getElementById("ul_Incomlete").removeChild(deleteTarget);
  });
  return btn;
};

const createBackButton = () => {
  const btn = document.createElement("button");
  btn.innerText = "戻す";
  btn.addEventListener("click", () => {
    const todoText = btn.previousElementSibling.innerText;
    createTodo(todoText);
    const deleteTarget = btn.closest("li");
    document.getElementById("ul_Comlete").removeChild(deleteTarget);
  });
  return btn;
};

document
  .getElementById("button_Todo_Item_Add")
  ?.addEventListener("click", onClickTodoItemAdd);
