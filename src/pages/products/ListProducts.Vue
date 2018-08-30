<template>
  <div id="media" class="media">
    <!-- <v-toolbar class="elevation-0 transparent media-toolbar">
    </v-toolbar> -->
    <!-- <slide-promotion /> -->
    <title-category title="Paling Hangat"/>
    <v-divider></v-divider>
    <div class="layout row media-layout">
      <div class="media-content flex transparent">
        <vue-perfect-scrollbar class="media-content--warp">
          <v-container fluid v-if="view ==='grid'">
            <v-layout row wrap class="x-grid-lg">
              <v-flex
                lg3
                md4
                sm6
                xs6
                class="pa-2"
                v-for="(item,index) in products"
                :key="index"
              >
                <a @click="showDetail(item.id)" class="d-flex">
                  <v-card flat tile>
                    <v-card-media
                      height="120px"
                      width="150px"
                    >
                      <img :src="item.gambar" alt="">
                    </v-card-media>
                    <v-divider></v-divider>
                      <v-card-title primary-title>
                          <div>
                            <p class="body font-weight-bold mb-0">{{ item.nama }}</p>
                            <p class="body mb-0">Rp {{ item.harga }}</p>
                            <p class="body mb-0"> {{ item.cakupan }}</p>
                          </div>
                        </v-card-title>
                  </v-card>
                </a>
              </v-flex>
            </v-layout>
          </v-container>
          <v-layout column v-else>
            <v-list dense class="transparent">
              <v-list-tile avatar @click="showDetail(item)"
              v-for="(item,index) in files"
              :key="'list-file-'+index"
              >
                <v-list-tile-avatar>
                  <v-icon>{{ mimeIcons(item) }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <div class="container pl-0" >
                    <div class="layout row">
                      <div class="flex"> Rp {{item.fileName}}</div>
                      <v-spacer></v-spacer>
                      <div class="caption">{{item ? formateDate(item.ctime) : ''}}</div>
                    </div>
                  </div>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-layout>
        </vue-perfect-scrollbar>
        <div class="text-xs-center mb-2">
      
        <v-btn v-if="buttonLoading"
          color="blue-grey"
          class="white--text"
          @click="nextPage()"
        >
          Tampilkan Lainnya
          <v-icon right dark>refresh</v-icon>
        </v-btn>
        <v-btn v-if="buttonLoading === false"
          color="blue-grey"
          class="white--text"
          @click="$router.push({ name: 'Dashboard' })"
        >
          Beranda
          <v-icon right dark>homepage</v-icon>
        </v-btn>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bytes from 'bytes';
import axios from 'axios';
import { getFileMenu, getFile } from '@/api/file';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

import TitleCategory from '@/pages/products/components/TitleCategoryProduct';
import SlidePromotion from '@/pages/homepage/SlidePromotion';

export default {
  components: {
    VuePerfectScrollbar,
    TitleCategory,
    SlidePromotion
  },
  props: {
    type: {
      type: String,
      default: 'image'
    },
  },
  data: () => ({
    size: 'lg',
    view: 'grid',
    products: null,
    page: 1,
    buttonLoading: true
  }),
  computed: {
    mediaMenu () {
      return getFileMenu;
    },
    files () {
      return getFile();
    }
  },

  mounted  () {
    axios.get(`http://localhost:5000/products/${this.page}`)
      .then(res => {
        console.log(res.data);
        this.products = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    nextPage () {
      if (this.products.length >= 1) {
        this.page++;
        axios.get(`http://localhost:5000/products/${this.page}`)
          .then(res => {
            this.products = res.data.data;
            if (this.products.length < 10) {
              this.buttonLoading = false;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    isImage (file) {
      return this.imageMime.includes(file.fileType);
    },
    mimeIcons (file) {
      return this.imageMime.includes(file.fileType) ? 'image' : 'insert_drive_file';
    },
    showDetail (id) {
      this.$router.push({
        name: 'detail-product',
        query: {
          id: id
        }
      });
    },
    fileSize (number) {
      return Bytes.format(number);
    },
    formateDate (string) {
      return (string) ? new Date(string).toLocaleDateString() : '';
    },
    computeFileImage (file) {
      return this.isImage(file) ? file.path : '/static/icon/file_empty.svg';
    }
  },
};
</script>
<style lang="stylus" scoped>
.media
  &-cotent--wrap

  &-menu
    min-width: 260px
    border-right: 1px solid #eee
    min-height: calc(100vh - 50px - 64px);
  &-detail
    min-width:300px
    border-left:1px solid #eee
</style>
