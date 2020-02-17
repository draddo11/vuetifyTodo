<template>
<nav>
    <v-toolbar flat  >
        <v-app-bar-nav-icon class= "grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class= "text-uppercase grey--text">
            <span class="font-weight-light"> Todo</span>
                Vuetify
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link to="/home">
        <v-btn  
        
        color= "blue">
        Home

        </v-btn>
        </router-link>
        <v-btn  flat  color= "grey">
            <span>Sign Out</span>
             <v-icon right>
                 exit_to_app 
             </v-icon> 
        </v-btn>
        
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
</template>

    <script>
    
    export default {
        data(){
            return{
                 drawer:false ,
                 links:[
                     {icon: 'dashboard',text:'Dashboard', route:'/' },
                     { icon:'folder', text:'My Projects' , route:'/projects'},
                     {icon:'person', text:'Team' , route: '/team'}
                 ]
            }
           
        }

    }
    </script>
