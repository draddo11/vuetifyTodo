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
              max-width="320"
             position= "left"
            class="mx-auto left">

   
   <v-form ref="userCrendentials" v-model="valid" :lazy-validation="lazy">
    
    <v-col
            cols="12"
            md="12"
          >

       <div class="my-2">
      <!-- <v-btn  block color="#4C8BF5" class="white--text">
       <v-img 
       width="18px"
       height="18px"
       src="../assets/glogo.png"> 
       </v-img>
        Google
        <v-icon color= "white " right >
        mdi-email
        </v-icon>
         </v-btn>

         <h2 class= text-sm-center >or</h2> -->
      <div class="google-btn">
  <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text"><b>Sign in with google</b></p>
</div>
     </div>
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
          v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              outlined
              dense
      ></v-text-field>
     </v-col>

      

    <!-- <v-row align="center"> -->
    <v-col class="text-center"
     cols="12"
      sm="12" 
      >
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

     
    
    </v-col>
     <!-- </v-row> -->
  
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
       show1: false,
       password: 'Password',
       rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      // password: [ 
      //   v => !!v || "Password is required",
      //   v => (v && v.length >= 6) || "Name must be more than 6 characters"
      // ]
    }
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


<style lang="scss" scoped>
$white: #fff;
$google-blue: #4285f4;
$button-active-blue: #1669F2;

.google-btn {
  width: 184px;
  height: 42px;
  background-color: $google-blue;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: $white;
  }
  .google-icon {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    float: right;
    margin: 11px 11px 0 0;
    color: $white;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
  &:hover {
    box-shadow: 0 0 6px $google-blue;
  }
  &:active {
    background: $button-active-blue;
  }
}

@import url(https://fonts.googleapis.com/css?family=Roboto:500);
</style>