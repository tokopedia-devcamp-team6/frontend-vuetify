<template>
  <div>
      <v-container row wrap v-if="product">
        <!-- content -->
        <v-layout row wrap>
          <v-flex md4 sm12 xs12 class="mb-3">
            <v-card flat tile>
              <v-card-media height="150px" width="150px"> 
                <img :src="product.gambar" v-if="product.gambar">
              </v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
        <!-- price -->
        <v-flex md12>
          <h4 class="heading font-weight-regular">{{ product.nama }}</h4>
          <h4 class="heading font-weight-regular red--text mb-2">Rp {{ product.harga }}</h4>
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
                <v-card-text>{{ product.detail }}</v-card-text>
              </v-card>
            </v-tab-item>
              <v-tab-item>
              <v-card flat>
                <v-card-text>
                  Nama Petani: {{ product.produsen.nama_lengkap }} ({{ product.produsen.nama_usaha }}) <br/>
                  Alamat: {{ product.produsen.alamat }} <br/>
                </v-card-text>
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
import axios from 'axios';
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
      id_products: null,
      active: null,
      product: null
    };
  },
  beforeMount () {
    this.id_products = this.$route.query.id;
  },
  mounted () {
    axios.get(`http://localhost:5000/products/id/${this.id_products}`)
      .then(res => {
        this.product = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>

<style>

</style>
