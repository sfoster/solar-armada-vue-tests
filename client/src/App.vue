<template>
  <div id="app-content">
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/tres"> TresJs Test </router-link> |
      <span> 
        <router-link to="/lobby"> Lobby </router-link> |
      </span>
      <span v-if="isLoggedIn"> 
        <button @click="handleSignOut"> Logout </button> 
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
console.log("in App.vue setup script");
import { ref } from 'vue'; // used for conditional rendering
import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoggedIn = ref(true);

// runs after firebase is initialized
onAuthStateChanged(getAuth(),function(user) {
    if (user) {
      isLoggedIn.value = true // if we have a user
    } else {
      isLoggedIn.value = false // if we do not
    }
});

const handleSignOut = () => {
  signOut(getAuth())
  router.push('/')
};

</script>

<style>
html, body {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1em;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
