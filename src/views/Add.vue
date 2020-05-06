<template>
  <div class="add">
      <h1>Add Your Property</h1>
      <h1 v-if="error">{{ error }}</h1>
      <form @submit.prevent="add">
          <label>Image</label>
          <input type="text" id="image" name="image" v-model="image" placeholder="https://...">
          <label>Title</label>
          <input type="text" id="title" name="title" v-model="title" placeholder="Title">
          <label>City</label>
          <input type="text" id="city" name="city" v-model="city" placeholder="City">
          <label>&euro; Price</label>
          <input type="number" id="price" v-model="price" placeholder="78 one night">
          <label>Description</label>
          <textarea name="description" placeholder="Type something about your place.."
          id="description" v-model="description" cols="30" rows="10"></textarea>
          <button>Add</button>
      </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export default {
  name: 'Add',
  data() {
    return {
      image: '',
      title: '',
      city: '',
      price: '',
      description: '',
      error: null,
    };
  },
  methods: {
    add() {
      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .collection('houses')
        .add({
          img: this.image,
          title: this.title,
          city: this.city,
          price: this.price,
          description: this.description,
        })
        .then(() => this.$router.replace('/properties'))
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>

<style scope>
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
form textarea {
    border: 1px solid #efefef;
    padding: 10px;
    outline: none;
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
