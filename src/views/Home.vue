<template>
  <div class="home">
    <h1>Welcome!</h1>
    <div class="margin-bottom">
      <p>No matter what kind of home or room you have to share, </p>
      <p>it simple and secure to host travelers.</p>
    </div>
    <router-link to="/login">Let's start!</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style scoped>
h1 {
  padding: 30px;
}
p {
  font-size: 20px;
  padding: 0 30px;
  margin: 0;
}
.margin-bottom {
  margin-bottom: 20px;
}
a {
  font-size: 20px;
  margin: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  transition: 1s;
}
a:hover {
  color: #d2d86e;
}
</style>
