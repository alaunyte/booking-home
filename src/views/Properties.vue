<template>
  <div class="properties">
      <h1>My Properties</h1>
      <div v-for="house in houses" :key="house.id">
          <div class="card">
            <div class="img-text">
              <img v-bind:src="house.img" alt="House-photo">
              <router-link :to="{path: `/viewPage/${house.id}`}">
              <div class="text">
                <h1>{{ house.title }}</h1>
                <p>{{ house.city }}</p>
              </div>
              </router-link>
            </div>
            <router-link class="edit" :to="{path: `/editPage/${house.id}`}">Edit</router-link>
          </div>
      </div>
      <router-link to="/add"><button>Add Property</button></router-link>
      <Footeris />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Footeris from '@/components/Footeris.vue';

export default {
  name: 'Properties',
  data() {
    return {
      houses: [],
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
      .get()
      .then((snapshot) => snapshot.docs.forEach((doc) => {
        this.houses.push({
          id: doc.id,
          img: doc.data().img,
          title: doc.data().title,
          city: doc.data().city,
        });
      }));
  },
};
</script>

<style scope>
.properties {
  padding: 20px;
  text-align: center;
}
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  transition: 1s;
}
.card:hover {
  box-shadow: 0 0 4px 3px #bbbbbb;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
.properties img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.edit {
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 10px 20px;
}
.properties button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #d2d86e;
  transition: 1s;
}
.properties button:hover {
  background-color: #95956e;
  color: #fff;
}
@media only screen and (min-width: 800px) {
  .properties {
    padding: 20px 100px;
    text-align: left;
  }
  .card {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px 10px 10px;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .properties img {
    width: 350px;
    height: 300px;
  }
  .img-text {
    display: flex;
    align-items: center;
  }
  .text {
    padding: 0 30px;
  }
}
</style>
