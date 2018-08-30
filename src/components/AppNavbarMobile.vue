<template>
  <v-bottom-nav
    :active.sync="activeBtn"
    :value="showNav"
    fixed=""
  >
    <v-btn flat color="teal">
      <span>Recents</span>
      <v-icon>history</v-icon>
    </v-btn>

    <v-btn flat color="teal">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn flat color="teal">
      <span>Nearby</span>
      <v-icon>place</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
 export default {
    data () {
      return {
        activeBtn: 1,
        showNav: true
      }
    }
  }
</script>

<style>

</style>
