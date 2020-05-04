<template>
  <div class="login">
    <h1>Login</h1>
    <form>
        <label>Email</label>
        <input type="email" name="email" id="email" placeholder="email@email.com">
        <label>Password</label>
        <input type="password" name="password" id="password" placeholder="Password">
        <button>Login</button>
    </form>
  </div>
</template>
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
