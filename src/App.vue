<template>
  <div id="app">
    <div id="nav">
      <router-link to="/properties"><img src="@/assets/logo.png" alt="logo"></router-link>
      <span v-if="displayMenu">
          <router-link to="/properties">Properties</router-link>
          <button @click="logout">Sign Out</button>
        </span>
      <span v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  computed: {
    displayMenu() {
      return this.$route.path !== '/login' && this.$route.path !== '/register';
    },
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 110px;
  padding: 10px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 6px 3px #d2d86e;
}

#nav a {
  text-decoration: none;
  padding: 10px 15px 0;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #d2d86e;
}
#nav img {
  height: 60px;
  margin-bottom: 15px;
}
#nav button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #d2d86e;
  transition: 1s;
}
#nav button:hover {
  background-color: #95956e;
  color: #fff;
}
@media only screen and (min-width: 800px){
  #nav {
  height: 70px;
  padding: 20px 100px;
  flex-direction: row;
  justify-content: space-between;
  }
  #nav img {
    margin-bottom: 0;
  }
}
</style>
