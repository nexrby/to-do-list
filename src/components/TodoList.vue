<template>
    <div>
        <ul>
            <TodoItem 
                v-for="(todo, i) in todos"
                :todo="todo"
                :index="i"
                @remove-todo="rmTodo"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    props: ['todos'],
    components: {        
        TodoItem
    },
    methods: {
        rmTodo(id){
            this.$emit('rmItem', id);
        }
    }
}
</script>

<style scoped>
    ul {
       list-style: none;
       margin: 0;
       padding: 0; 
    }
</style>