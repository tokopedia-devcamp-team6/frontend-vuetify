<template>
  <v-card flat>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      :fixed="true"
      color="#e67e22"
    >
      <v-btn
        color="danger"
        flat
        value="buyNow" @click="submit()">
        <h5 class="heading red--text">Beli Sekarang</h5>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'buyNow'
    };
  },
  methods: {
    submit () {
      alert('You buy! ');
    }
  },
};
</script>
