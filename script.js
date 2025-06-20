const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerHTML = `<span class="tick">⬜</span> ${taskText}`;
  span.onclick = () => {
    const isCompleted = li.classList.toggle("completed");
    span.innerHTML = isCompleted
      ? `<span class="tick">✅</span> <s>${taskText}</s>`
      : `<span class="tick">⬜</span> ${taskText}`;
  };

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "🗑️";
  delBtn.onclick = () => {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 400); 
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});
