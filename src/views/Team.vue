<template>
<div position="center" width="300px">
<a :href="email" target="_blank" rel="noopener noreferrer">
  <v-icon>email</v-icon>
</a>
<hr>
<v-spacer></v-spacer>
<a :href="people" target="_blank" rel="noopener noreferrer">
<v-icon>people</v-icon>
</a>
</div>
</template>
  <script>
  export default{
    data(){
      return{
        email:"https://www.google.com",
        people:"https://www.facebook.com"
      }
    }
  }
</script>

<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>