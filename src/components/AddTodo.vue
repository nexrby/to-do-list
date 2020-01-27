<template>
	<form @submit.prevent="onSubmit">
		<input type="text" v-model="title">
		<button type="submit">Добавить дело</button>
	</form>
</template>
<script>
	export default {
		data() {
			return {
				title: ''
			}
		},
		methods: {
			onSubmit(){
				// проверка есть ли что то в тайтле
				if (this.title.trim()) {
					const newTodo = {
						id: Date.now(),
						title: this.title,
						completed: false
					}

					this.$emit('add-todo', newTodo)
					this.title = ''
				}
			}
		}
	}
</script>
<style scoped>
	form {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
	}
	input {
		width: 40%;
	}
</style>