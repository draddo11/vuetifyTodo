<template>
  <v-app class="grey lighten-4">
    <Navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Navbar from '@/components/Dashboard';


export default {
  
  name: 'App',

  components: { Navbar},

  data: () => ({
  
  }),
};
</script>
