<template>
<nav>
    <v-toolbar  color="white" flat reponsive height=50px >
        <v-app-bar-nav-icon  class= "grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class= "text-uppercase grey--text">
           <router-link class="routes" to="/"> <v-img 
           height="60px"
           width="60px"
           center
           src="../assets/hiremate.png"> </v-img>
                <!-- <v-icon></v-icon><v-icon mediun>home</v-icon> -->
                 </router-link>
        </v-toolbar-title>
        
       
        
        
       
       
        <v-spacer></v-spacer>
        

        <!-- <router-link class="routes" to="/signin">
        <div class="my-2">
        <v-btn  text color="teal" >
          
            <span>Login</span>
           
        </v-btn>
        </div>
        </router-link> -->
    

       

        
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" absolute  class= "primary">
        
       <v-list>
           <v-list>
              
             <v-list-item name="links " v-for="link in links" :key="link.text" router :to="link.route"> 
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
                 </v-list-item> 
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
                     {icon: 'dashboard',text:'Dashboard', route:'/userdashboard' },
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