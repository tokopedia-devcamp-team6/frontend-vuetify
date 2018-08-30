<template>
  <v-layout row class="align-center layout px-4 pt-1 app--page-header">
    <div class="page-header-left mb-1">
      <h3 class="pr-3">{{ title }}</h3>
    </div>
  </v-layout>  
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {

    };
  },
};
</script>
