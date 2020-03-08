<template>
  <div class= "dashboard">
      
      <v-banner color="grey-4">
     
    
    <template
      color="grey-3"
     >
  
      <div>
     Find your next dream job or Candidate  
     <span> <router-link class="routes" to="/signin">
        <div class="my-2">
        <v-btn  text  color="error">
          
            <span>Sign Up</span>
            
        </v-btn>
        </div>
        </router-link> </span>
      </div> 
      <router-link class="routes" to="/team" >
      <v-btn text color="primary">Remote </v-btn>
      </router-link>
      <v-btn text color="primary">Full-time</v-btn>
      <v-btn text color="primary">Internships</v-btn>
      <v-btn text color="primary">Part-time</v-btn>
      <v-btn text color="primary">Freelance</v-btn>
      <v-btn text color="primary">All Jobs</v-btn>
    
    </template>

    
  </v-banner>
  
 <template>
  <v-card
    class="pa-4"
    elevation="70"
    flat
  >
    <v-toolbar
      dense
     right
      class="mx-12"
    >
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>

      

     
    </v-toolbar>
  </v-card>
</template>
























    <!-- <v-app-bar-nav-icon class="hidden-sm-and-down"></v-app-bar-nav-icon> -->
    <!-- <v-toolbar-title class="title mr-6 hidden-sm-and-down">Cryptocurrency</v-toolbar-title> -->
    <!-- <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      chips
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="symbol"
      label="Search for a job..."
      solo
    > -->
      <!-- <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            Search for your favorite
           
          </v-list-item-title>
        </v-list-item>
      </template>
      <template v-slot:selection="{ attr, on, item, selected }">
        <v-chip
          v-bind="attr"
          :input-value="selected"
          color="blue-grey"
          class="white--text"
          v-on="on"
        >
          <v-icon left>mdi-coin</v-icon>
          <span v-text="item.name"></span>
        </v-chip>
      </template>
      <template v-slot:item="{ item }">
        <v-list-item-avatar
          color="white"
          class="headline font-weight-light white--text"
        >
          {{ item.name.charAt(0) }}
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-coin</v-icon>
        </v-list-item-action>
      </template>
    </v-autocomplete> -->

   
    

  <div id="app">
  <v-app id="inspire">
    <v-card
     elevation="25"
      class="mx-auto"
      max-width="mx-auto"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Remote</v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div>Google Front end dev </div>
  
        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Share
        </v-btn>
  
        <v-btn
          color="orange"
          text
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
  
</div>

</div>


  
</template>

 

<script>
 

  export default {
    data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }),
    
  }
</script>

<style>
#remove{
 text-decoration-color: none;
}

</style>