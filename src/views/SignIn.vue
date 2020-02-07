<template>
  <div class="px-4">
    <br />
    <p class="headline font-weight-black">
      Sign Up to manage your current Job boards.
    </p>
    <p class="caption font-weight-medium">
      By continuing, you agree to our Terms of Use and Privacy Policy
    </p>

    <v-card
       color="#fff"
            light
              max-width="360"
             position= "left"
            class="mx-auto left">

   
   <v-form ref="userCrendentials" v-model="valid" :lazy-validation="lazy">
    
    <v-col
            cols="12"
            md="12"
          >
      <v-text-field
        v-model="userCrendentials.email"
        :rules="rules.email"
        label="Email"
        required
        outlined
        dense
      ></v-text-field>
    </v-col>

     <v-col
            cols="12"
            md="12"
                 
          >

      <v-text-field
        v-model="userCrendentials.password"
        :rules="rules.password"
        label="Password"
        v-mask= "mask"
        required
        outlined
        dense
      ></v-text-field>
     </v-col>

      

     <v-row align="center">
    <v-col class="text-center" cols="12" sm="8.5" >
      <div  class="my-2">
      <v-btn 
        block
        color="error"
        @click="signIn"
        :loading="iconLoading"
        :disabled="iconLoading"
      >
        Sign In <v-icon right dark>mdi-login-variant</v-icon>
      </v-btn>
      </div>

       <!-- <v-spacer></v-spacer> -->
       <!-- <v-row align="center"> -->
      <v-col class="text-center" cols="12">
        <div class="my-2">
      <v-btn text color="teal" class= "text-lowercase" >Forgot Password ?</v-btn>
       </div>
      </v-col>
       <!-- </v-row> -->

     <h2 class= text--center >or</h2>

     <div class="my-2">
      <v-btn block class outlined color ="indigo" >
         Google
        <v-icon color= "blue darken-1" right >
        mdi-email
        </v-icon>
         </v-btn>
     </div>
    </v-col>
     </v-row>
  
    </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "signIn",
  data: () => ({
    valid: true,
    iconLoading: false,
    loader: null,
    lazy: false,
    userCrendentials: {
      email: "",
      password: ""
    },
    rules: {
      email: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Name must be more than 6 characters"
      ]
    }
  }),
  methods: {
    signIn() {
      let self = this;
      this.iconLoading = true;
      if (this.$refs.userCrendentials.validate()) {
        self.iconLoading = false;
      } else {
        this.iconLoading = false;
        return false;
      }
    }
  }
};
</script>


