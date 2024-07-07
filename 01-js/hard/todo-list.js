/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
let tasks = [];
class Todo {
  add(task){
    tasks.push(task);
  }
  remove(index){
    tasks.splice(index, 1);
    }
    update(index, updatedTask){
      if(index < tasks.length){
      tasks[index] = updatedTask;
      }
      }
      getAll(){
        return tasks;
        }
        get(index){
          return tasks[index];
          }
          clear(){
            tasks = [];
            }
}

module.exports = Todo;
