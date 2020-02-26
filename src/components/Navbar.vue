<template>
<nav>
    <v-toolbar flat reponsive >
        <v-app-bar-nav-icon  class= "grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class= "text-uppercase grey--text">
            <span class="font-weight">Hiremate </span>
                <v-icon></v-icon>
        </v-toolbar-title>
        <v-spacer></v-spacer>
       
        <router-link class="routes" to="/">
        <v-icon large>home</v-icon>
        </router-link>
       
        <v-spacer></v-spacer>
        <router-link class="routes" to="/signin">
        <v-btn  flat   elevation="9" class= "error">
          
            <span>Sign In</span>
             <v-icon class="routes" right>
                 exit_to_app 
             </v-icon> 
        </v-btn>
        </router-link>
        
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer"  class= "primary">
        
       <v-list>
           <v-list>
              
             <v-list-tile  v-for="link in links" :key="link.text" router :to="link.route"> 
                 <v-list-item-action >
                     <v-list-item>
                     <v-list-item-icon>
                     <v-icon class="white--text">{{link.icon}}</v-icon>
                     </v-list-item-icon>
                     </v-list-item>
                </v-list-item-action>
                 
                 <v-list-item>
                <v-list-item-title name="text" class="white--text">{{link.text}}</v-list-item-title>
                 </v-list-item>
                 </v-list-tile> 
            </v-list> 
       </v-list>
    
    </v-navigation-drawer>

</nav>
<!-- </Footer> -->
</template>

    <script>
    import Footer from "./Footer.vue";
    
    export default {
        data(){
           
            return{
                 components: Footer,
                 drawer:true ,
                 links:[
                     {icon: 'dashboard',text:'Dashboard', route:'/' },
                     { icon:'folder', text:'My Projects' , route:'/projects'},
                     {icon:'person', text:'Team' , route: '/team'}
                 ]
            }
           
        }

    }
    </script>
<style>
.routes  {
    text-decoration: none;
}
</style>