<template>
  <div>
    <h2>Todo List Application</h2>
    <hr>
    <AddTodo
      @add-todo="addTodoMain"
    />
    <hr>
    <TodoList 
      v-bind:todos="todos"
      @rmItem="remItem"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name: "app",
  data() {
    return {
      todos: [
        // {id:1, title: 'сделать дело 1', completed: false},
        // {id:2, title: 'сделать дело 2', completed: false},
        // {id:3, title: 'сделать дело 3', completed: false}
      ]
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.todos = json
      })
  },
  methods:{
    remItem(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodoMain(todo) {
      this.todos.push(todo)
    }
  },
  components: {
    TodoList, AddTodo
  }
};
</script>