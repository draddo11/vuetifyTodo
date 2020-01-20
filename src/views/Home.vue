<template>
  <div class="home">
      <h1>HomePage</h1>

   <v-btn class="pink white--text"> Normal btn </v-btn>
   <hr>
   <v-btn color="yellow" depressed> depressed </v-btn>
   <hr>
   <v-btn flat color="blue" >flat btn</v-btn>
    <hr>
    <v-btn  depressed  class="pink white--text" > 
        <v-icon left >email</v-icon>
        <span>email me </span>

    </v-btn>

  </div>
</template>

  
  <script>
  export default {
  
  }
  </script>
  
  
