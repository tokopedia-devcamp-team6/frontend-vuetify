<template>
    <v-container grid-list-xl fluid> 
      <v-layout row wrap> 
        <v-flex lg4 sm12 xs12>
          <profile-card>
          </profile-card>
        </v-flex> 
      </v-layout>
    </v-container>
</template>

<script>
import ProfileCard from '@/components/widgets/card/ProfileCard';

export default {
  components: {
    ProfileCard
  },
  data () {
    return {

    };
  },
};
</script>

<style>

</style>
