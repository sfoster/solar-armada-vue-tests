<template>
  <h1> Lobby </h1>
  <!-- This page is for authenticated users only -->
  <hr>
  <h2>Games List</h2>

  <ul v-if="items.length">
    <li v-for="(item, index) in items" :key="index">
      {{ item.displayName }}
    </li>
  </ul>
  <p v-else>No games in the lobby!</p>
</template>

<script setup>
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { onBeforeUnmount, ref } from 'vue';
import { getDatabase, ref as dbRef, onValue as dbOnValue } from "firebase/database";

const db = getDatabase();

const router = useRouter();
const authListener = onAuthStateChanged(getAuth(),function(user) {
  if (!user) { // not logged in
    alert('you must be logged in to view this. redirecting to the home page');
    router.push('/');
  }
});

onBeforeUnmount(() => {
  // clear up listener
  authListener();
});

const items = ref([]);
const gamesListRef = dbRef(db, 'games');
dbOnValue(gamesListRef, (snapshot) => {
  const data = snapshot.val();
  items.value = Object.values(data);
});
</script>