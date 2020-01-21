<template>
  <div class="home">
      <h1>HomePage</h1>

   <v-btn class="pink white--text"> Normal btn </v-btn>
   
   <v-btn color="yellow" depressed> depressed </v-btn>
   
   <v-btn rounded flat color="blue" >flat btn</v-btn>
   

    <v-btn  depressed  class="pink white--text" > 
        <v-icon left> email</v-icon>
        <span>email me </span>
    </v-btn>
  
    <v-btn class="ma-2" dark>
        <v-icon dark left>mdi-minus_circle</v-icon>Cancel
      </v-btn>

  <v-btn  depressed small   class="pink white--text" > 
        <v-icon left> email</v-icon>
        <span>email me </span>
    </v-btn>


     <v-btn  depressed large class="pink white--text" > 
        <span>email me </span>
         <v-icon right > email</v-icon>
    </v-btn>

    <v-btn fab  depressed small dark  color="purple" > 
         <v-icon  > favourite </v-icon>
    </v-btn>




  </div>
</template>

  
  <script>
  export default {
  
  }
  </script>
  
  
