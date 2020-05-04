<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img src="@/assets/logo.png" alt="logo"></router-link>
      <span v-if="!loggedIn">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </span>
      <span v-else>
          <router-link to="/properties">Properties</router-link>
          <button @click="signOut">Sign Out</button>
        </span>
    </div>
    <router-view/>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    signout() {
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
  height: 100px;
  padding: 20px 0;
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
}
@media only screen and (min-width: 800px){
  #nav {
  height: 70px;
  padding: 20px 100px;
  flex-direction: row;
  justify-content: space-between;
}
}
</style>
