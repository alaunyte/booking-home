<template>
  <div class="edit">
    <h1>Edit property</h1>
      <form @submit.prevent="update">
          <label>Image</label>
          <img v-bind:src="img" alt="House-photo">
          <label>Title</label>
          <input type="text" id="title" name="title" v-model="title"
          placeholder="Title">
          <label>City</label>
          <select id="city" disabled selected v-model="city">
            <option value="Vilnius">Vilnius</option>
            <option value="Kaunas">Kaunas</option>
            <option value="Klaipeda">Klaipeda</option>
            <option value="Nida">Nida</option>
          </select>
          <label>&euro; Price</label>
          <input type="number" id="price" v-model="price" placeholder="78 one night">
          <label>Description</label>
          <textarea name="description"
          id="description" v-model="description"
          cols="30" rows="10"></textarea>
          <button type="submit" native-type="submit">Update</button>
      </form>
    <Footeris />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Footeris from '@/components/Footeris.vue';

export default {
  name: 'EditPage',
  data() {
    return {
      img: '',
      title: '',
      city: '',
      price: '',
      description: '',
    };
  },
  components: {
    Footeris,
  },
  beforeMount() {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .collection('houses')
      .doc(this.$route.params.id)
      .get()
      .then((house) => {
        this.img = house.data().img;
        this.title = house.data().title;
        this.city = house.data().city;
        this.price = house.data().price;
        this.description = house.data().description;
      });
  },
  methods: {
    update() {
      firebase
        .firestore()
        .collection('houses')
        .doc(this.$route.params.id)
        .update({
          uid: firebase.auth().currentUser.uid,
          title: this.title,
          city: this.city,
          price: Number(this.price),
          description: this.description,
        })
        .then(() => this.$router.replace('/properties'));
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
form img {
  width: 100%;
}
form input {
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #efefef;
}
form select {
  outline: none;
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
        border: 1px solid #efefef;
        border-radius: 5px;
        transition: 1s;
    }
    form:hover {
      box-shadow: 0 0 4px 3px #bbbbbb;
    }
    form button {
        width: 20%;
    }
}
</style>
