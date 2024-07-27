<template>
    <v-responsive class="border rounded" max-height="700">
      <VApp>
        <NavBar></NavBar>
        <v-navigation-drawer
              
              theme="dark"
              permanent
            >
              <v-list color="transparent">
                <v-list-item prepend-icon="mdi-view-dashboard" title="Periodo" @click="navigateTo('/home/periodo')"></v-list-item>
                <v-list-item prepend-icon="mdi-gavel" title="Carreras"  @click="navigateTo('/home/carreras')"></v-list-item>
                <v-list-item prepend-icon="mdi-gavel" title="Materias" @click="navigateTo('/home/materias')"></v-list-item>
                <v-list-item prepend-icon="mdi-account-box" title="Usuarios" @click="navigateTo('/home/usuarios')"></v-list-item>
                
                <v-list-item prepend-icon="mdi-gavel" title="Roles"></v-list-item>
              </v-list>

              <template v-slot:append>
                <div class="pa-2">
                  <v-btn block>
                    Cerrar Sesión
                  </v-btn>
                </div>
              </template>
        </v-navigation-drawer>
  
        <VMain
              class="bg-white"
              theme="dark"
              permanent
        >
          <NuxtPage/>
          <slot></slot>         

        </VMain>
     </VApp>
    </v-responsive>
    
    
  </template>

  
  <script setup lang="">
    const user = useState('user')
</script>

