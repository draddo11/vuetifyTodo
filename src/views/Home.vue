<template>
  <div class="home">
      <h1>HomePage</h1>

   <v-btn class="pink white--text"> Normal btn </v-btn>
   
   <v-btn color="yellow" depressed> depressed </v-btn>
   <hr>
   <v-btn rounded flat color="blue" >flat btn</v-btn>
    <hr>
    <v-btn  depressed  class="pink white--text" > 
        <v-icon left >fa-email</v-icon>
        <span>email me </span>

    </v-btn>
    <div>
    <v-btn class="ma-2" dark>
        <v-icon dark left>mdi-minus_circle</v-icon>Cancel
      </v-btn>
    </div>


  </div>
</template>

  
  <script>
  export default {
  
  }
  </script>
  
  
