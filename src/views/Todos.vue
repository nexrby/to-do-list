<template>
  <div>
    <h2>Todo List Application</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <hr>
    <AddTodo
      @add-todo="addTodoMain"
    />
    <hr>
    <select v-model="filter">
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="not-completed">not-completed</option>
    </select>
    <hr>
    <Loader v-if="loading" />
    <TodoList 
      v-else-if="filteredTodos.length"  
      :todos="filteredTodos"
      @rmItem="remItem"
    />
    <p v-else>No todos!!!</p>
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList'
  import AddTodo from '@/components/AddTodo'
  import Loader from '@/components/Loader'
  export default {
    name: "app",
    data() {
      return {
        todos: [],
        loading: true,
        filter: 'all'
      }
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.todos = json
            this.loading = false
          }, 1000)
        })
    },
    // watch: {
    //   filter(value) {
    //     console.log(value)
    //   }
    // },
    computed: {
      filteredTodos() {
        if (this.filter === 'all') {
          return this.todos
        }

        if (this.filter === 'completed') {
          return this.todos.filter(t => t.completed)
        }
        
        if (this.filter === 'not-completed') {
          return this.todos.filter(t => !t.completed)
        }
      }
    },
    methods: {
      remItem(id) {
        this.todos = this.todos.filter(t => t.id !== id)
      },
      addTodoMain(todo) {
        this.todos.push(todo)
      }
    },
    components: {
      TodoList, AddTodo, Loader
    }
  };
</script>
<style scoped>
  select{
    margin: 30px;
  }
</style>