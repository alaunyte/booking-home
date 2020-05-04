<template>
  <div class="register">
    <h1>Register</h1>
    <div v-if="error">{{ error }}</div>
    <form @submit.prevent="register">
        <div class="width-50">
            <div>
                <label>First Name</label>
                <input type="text" name="name" id="name" placeholder="First Name">
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name">
            </div>
        </div>
        <label>Email</label>
        <input type="email" name="email" id="email" placeholder="email@email.com">
        <label>Password</label>
        <input type="password" name="password" id="password" placeholder="Password">
        <button>Register</button>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push('/login'))
        .catch((error) => {
          this.error = error.message;
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
form div {
    display: flex;
    flex-direction: column;
}
.width-50 div {
    width: 100%;
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
    form .width-50 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .width-50 div {
        display: flex;
        flex-direction: column;
        width: 48%;
    }
    form button {
        width: 20%;
    }
}
</style>
