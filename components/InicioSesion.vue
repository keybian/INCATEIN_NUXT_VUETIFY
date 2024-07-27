<template>
    <v-app id="inspire">      
         <v-container fluid fill-height class="centrar">
            
               
                  <v-card class="elevation-12 ma-auto" width="450" >
                     <v-toolbar dark >
                        <v-toolbar-title>Inicio de Seción</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                            
                           <VTextField
                           prepend-icon="mdi-account"
                              name="login"
                              label="Email"
                              placeholder="johndoe@gmail.com"
                              type="email"
                           ></VTextField>
                           <v-text-field
                              id="password"
                              prepend-icon="mdi-lock"
                              name="password"
                              label="Password"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary"  @click="login">Iniciar Sesión</v-btn>
                     </v-card-actions>
                  </v-card>
               
         </v-container>
      
   </v-app>
</template>
<script setup lang="ts">
   const user = useState('user',()=> false)

   const login=()=>{
      user.value=true
      navigateTo('/home')
   }



</script>

<style scoped>
.centrar{
  display: flex;
  align-items: center;
  height: 80vh;
}
</style>