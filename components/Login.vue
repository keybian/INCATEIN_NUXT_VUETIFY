<template>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
    <v-layout>
      <v-app-bar>
        <v-app-bar-title>PRIMERA IGLESI BAUTISTA DE TUREN</v-app-bar-title>

        INCATEIN

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="n in 4" :key="n" cols="12">
              <v-card
                :subtitle="`Subtitle for Content ${n}`"
                :title="`Content ${n}`"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
              ></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
          
 </template>
 
 <script>
 
 </script>
 
 <style></style>