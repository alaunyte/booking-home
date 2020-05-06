<template>
  <div class="viewPage">
    <div class="ad">
      <h1>{{ house[0].title }}</h1>
      <p>{{ house[0].city }}</p>
      <p>&euro; {{ house[0].price }} one night</p>
      <img v-bind:src="house[0].img" alt="House-photo">
      <p>{{ house[0].description }}</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'ViewPage',
  data() {
    return {
      house: [],
    };
  },
  beforeMount() {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .collection('houses')
      .doc(this.$route.params.id)
      .get()
      .then((snapshot) => {
        this.house.push({
          id: snapshot.id,
          img: snapshot.data().img,
          title: snapshot.data().title,
          city: snapshot.data().city,
          price: snapshot.data().price,
          description: snapshot.data().description,
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
