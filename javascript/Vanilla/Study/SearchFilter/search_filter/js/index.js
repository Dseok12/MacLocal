// mockData생성
const todos = [
  { id: 1, content: 'javascript 공부하기' },
  { id: 2, content: 'React 공부하기' },
  { id: 3, content: '러닝하기' },
  { id: 4, content: '과제하기' },
];

// mockData todo-list에 뿌리기
const rendedList = (todoItemList) => {
  const todoList = document.getElementById('todoList'); // DOM가져오기
  todoList.innerHTML = ''; // 초기화 한번 시키고

  todoItemList.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-list';
    todoItem.textContent = todo.content;
    todoList.appendChild(todoItem);
  });
};

rendedList(todos); // 뿌려주기 실행

const searchInput = document.getElementById('searchInput'); // input DOM 가져오기

searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.toLowerCase();
  const filterTodos = todos.filter((todo) => todo.content.toLowerCase().includes(inputValue)); // 여기에 inlcudes()메서드가 쓰임.
  rendedList(filterTodos);
});
