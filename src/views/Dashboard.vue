<template>
  <div class= "dashboard">
      
      <v-banner color="grey-4">
     
    
    <template
      color="grey-3"
     >
  
      <div>
     Find your next dream job or Candidate
      </div> 
      <v-btn text color="primary">Remote</v-btn>
      <v-btn text color="primary">Full-time</v-btn>
      <v-btn text color="primary">Internships</v-btn>
      <v-btn text color="primary">Part-time</v-btn>
      <v-btn text color="primary">Freelance</v-btn>
      <v-btn text color="primary">All Jobs</v-btn>
    
    </template>
    
  </v-banner>
      <div id="app">
  <v-app id="inspire">
    <v-card
     
      class="mx-auto"
      max-width="mx-auto"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
       
      </v-img>
  
      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>
  
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
  <div id="app">
  <v-app id="inspire">
    <v-card
      max-width="400"
      class="mx-auto"
    >
      <v-system-bar
        color="pink darken-2"
        dark
      >
        <v-spacer></v-spacer>
  
        <v-icon>mdi-window-minimize</v-icon>
  
        <v-icon>mdi-window-maximize</v-icon>
  
        <v-icon>mdi-close</v-icon>
      </v-system-bar>
  
      <v-app-bar
        dark
        color="pink"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>My Music</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
  
   
        <v-row dense>
          <v-col cols="12">
            <v-card
              color="#385F73"
              dark
            >
              <v-card-title class="headline">Unlimited music now</v-card-title>
  
              <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
  
              <v-card-actions>
                <v-btn text>Listen Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
  
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>
  
                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>
  
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      
    </v-card>
  </v-app>
</div>
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