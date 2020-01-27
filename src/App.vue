<template>
  <div id="app">
    <h1>Todo List</h1>
    <hr>
    <TodoList 
      v-bind:todos="todos"
      @rmItem="remItem"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
export default {
  name: "app",
  data() {
    return {
      todos: [
        {id:1, title: 'сделать дело 1', completed: false},
        {id:2, title: 'сделать дело 2', completed: false},
        {id:3, title: 'сделать дело 3', completed: false}
      ]
    }
  },
  methods:{
    remItem(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  },
  components: {
    TodoList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
