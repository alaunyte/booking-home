<template>
  <div class="viewPage">
    <div class="ad" v-for="house in houses" :key="house.id">
      <h1>{{ house.title }}</h1>
      <p>{{ house.city }}</p>
      <p>&euro; {{ house.price }} one night</p>
      <img v-bind:src="house.img" alt="House-photo">
      <p>{{ house.description }}</p>
      <router-link to="/Properties">Back</router-link>
    </div>
    <Footeris />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
import Footeris from '@/components/Footeris.vue';

export default {
  name: 'ViewPage',
  data() {
    return {
      houses: [],
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
        this.houses.unshift({
          id: house.id,
          uid: firebase.auth().currentUser.uid,
          img: house.data().img,
          title: house.data().title,
          city: house.data().city,
          price: house.data().price,
          description: house.data().description,
        });
      });
  },
};
</script>

<style scope>
.viewPage {
  padding: 20px;
  text-align: center;
}
.ad {
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 10px;
  transition: 1s;
}
.ad:hover {
  box-shadow: 0 0 4px 3px #bbbbbb;
}
.viewPage img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
.viewPage a {
  text-decoration: none;
  background-color: #d2d86e;
  border-radius: 5px;
  display: inline-block;
  margin: 20px;
  padding: 10px;
  transition: 1s;
}
.viewPage a:hover {
  background-color: #95956e;
  color: #fff;
}
@media only screen and (min-width: 800px) {
  .ad {
    width: 60%;
    margin: 0 auto;
  }
  .ad p {
    width: 50%;
    margin: 10px auto;
  }
}
</style>
