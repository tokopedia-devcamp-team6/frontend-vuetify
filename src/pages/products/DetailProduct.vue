<template>
  <div>
      <v-container row wrap>
        <!-- content -->
        <v-layout row wrap>
          <v-flex md4 sm12 xs12 class="mb-3">
            <v-card flat tile>
              <v-card-media height="150px" width="150px"> 
                <img src="http://pakrice.pk/wp-content/uploads/2015/12/Non-basmati-Rice-1-600x400.jpg">
              </v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
        <!-- price -->
        <v-flex md12>
          <h4 class="heading font-weight-regular">Beras Super 2KG</h4>
          <h4 class="heading font-weight-regular red--text mb-2">Rp 40.000</h4>
        </v-flex>
        <!-- description -->
        <v-flex md12>
          <v-tabs
            v-model="active"
            color="green"
            dark
            slider-color="yellow">
            <v-tab> 
              Deskripsi
            </v-tab>
            <v-tab> 
              Informasi Penjual
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
              <v-tab-item>
              <v-card flat>
                <v-card-text>{{ texta }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-container>
      <!-- buy Now -->
      <buy-now />
  </div>
</template>

<script>
import BuyNow from '@/pages/products/components/BuyNow';

export default {
  components: {
    BuyNow
  },
  data () {
    return {
      items: [
        {
          text: 'Home', 
          disabled: false
        },
        {
          text: 'Test',
          disabled: true
        }
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      texta: 'Lincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      active: null
    };
  },
};
</script>

<style>

</style>
