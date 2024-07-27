<template>
  <Principal>
    <div class="centrar">
            <v-card
                class="mx-auto"
                prepend-icon="$vuetify"
                subtitle="Vesión de Prueba"
                width="800"
              >
                <template v-slot:title>
                  <span class="font-weight-black">Bienvenidos Al Sistema De Control de estudio de INCATEIN</span>
                </template>

                <v-card-text class="bg-surface-light pt-4">
                  "No Temas Yo Estoy Contigo!"
                </v-card-text>
              </v-card>

          </div>
  </Principal>
</template>

<script setup lang="ts">
    definePageMeta({
      middleware:'auth',
    });
  </script>

<style scoped>
.centrar{
  display: flex;
  align-items: center;
  height: 80vh;
}
</style>