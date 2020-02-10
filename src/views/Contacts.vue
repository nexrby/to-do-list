<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/todos">Todos</router-link>
        </nav>
        <h2>Contacts</h2>
        <p>my phone</p>
        <p>my email</p>
        <p>my skype</p>
    </div>
</template>
<script>
</script>
<style scoped>
    nav {
        margin: auto;
        display: flex;
        justify-content: space-evenly;
    }
    h2 {
        color: blue;
    }
</style>