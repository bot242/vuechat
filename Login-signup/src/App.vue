<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />     
        
    </div>
</template>

<script>

    export default {
        name: 'App',        
        data() {
            return {
                authenticated: false,
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    
    #app {
        width: 1024px;
        margin: auto;
    }
    #nav {
        margin-top:15px;               
        text-align:right;
    }
</style>