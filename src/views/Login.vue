<template>
  <div class="login">
    <h1>Login</h1>
    <h1 v-if="error">{{ error }}</h1>
    <form @submit.prevent="login">
        <label>Email</label>
        <input
        type="email"
        v-model="email"
        id="emial"
        placeholder="email@email.com"
      />
      <label>Password</label>
      <input
        type="password"
        v-model="password"
        id="password"
        placeholder="Password"
      />
        <button>Login</button>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.replace('/properties'))
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 20px;
}
form input {
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #efefef;
}
form label {
    margin: 15px 0 5px;
}
form button {
    margin: 30px 0;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #d2d86e;
    width: 40%;
    transition: 1s;
}
form button:hover {
    background-color: #95956e;
    color: #fff;
}
@media only screen and (min-width: 800px) {
  form {
        width: 60%;
        margin: 0 auto;
    }
    form button {
        width: 20%;
    }
}
</style>
