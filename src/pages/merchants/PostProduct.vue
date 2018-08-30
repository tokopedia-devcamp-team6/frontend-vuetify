<template>
  <div>
    <v-container> 
        <v-form v-model="valid">
      <v-subheader class="pa-0">Tambahkan Produk</v-subheader>
      <v-text-field
        
        label="Nama Produk"
        name="fullname"
        v-model="formModel.name"
        v-validate="'required'"
        data-vv-name="fullname"     
        :error-messages="errors.collect('fullname')"  
        required
      ></v-text-field>  
        <v-textarea
          name="input-7-4"
          label="Deskripsi Produk"
        ></v-textarea> 
        <v-text-field label="Foto Produk" prepend-icon="attach_file"></v-text-field>
        <input
          type="file"
          style="display: none"
          ref="image"
          accept="image/*">
      <v-text-field
        label="Stok"
        name="stok"
        v-validate="'required|number'"
        data-vv-name="stok"     
        :error-messages="errors.collect('stok')"        
        v-model="formModel.stok"
        required
      ></v-text-field>    
      <v-text-field
        label="Harga"
        placeholder=""
        v-validate="'required|number'"
        data-vv-name="price"     
        :error-messages="errors.collect('price')"                
        v-model="formModel.price"
        mask="price"
        required
      ></v-text-field>    
      <v-subheader class="pa-0 mt-3">Pengiriman</v-subheader>
      <v-select
        :items="cakupan"
        v-validate="'required'"
        data-vv-name="country"     
        :error-messages="errors.collect('country')"           
        v-model="formModel.country"
        label="Cakupan"
        auto
        required
        item-text="name"
        item-value="id"
      ></v-select>
      <v-select
        :items="kategori"
        v-validate="'required'"
        data-vv-name="city"     
        :error-messages="errors.collect('city')"           
        v-model="formModel.city"
        label="Kategori"
        required
        auto
        item-text="name"
        item-value="id"
      ></v-select>
    <v-text-field
      label="Kode Pos"
      v-model="formModel.zipcode"
      required
    ></v-text-field>
    <div class="form-btn">
      <v-btn outline @click="submit" color="primary">Tambahkan Produk</v-btn>
    </div>

  </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },    
  data: () => ({
    formModel: {
      country: null,
    },
    cakupan: [
      { name: 'Kendal', abbr: 'FL', id: 1, country_id: 1 },
      { name: 'Semarang', abbr: 'GA', id: 2, country_id: 1 },
      { name: 'Nasional', abbr: 'NE', id: 3, country_id: 1 },
    ],    
    kategori: [
      { name: 'Pertanian', abbr: 'NY', id: 1, country_id: 1 },
      { name: 'Peternakan', abbr: 'TA', id: 2, country_id: 1 },
      { name: 'Perikanan', abbr: 'SF', id: 3, country_id: 1 },
    ],    
    valid: true,

  }),
  mounted () {
    this.$validator.localize('en', this.dictionary);
  },  
  methods: {
    submit () {
      this.$validator.validateAll();
    },
    clear () {
      this.formModel = {};
      this.$validator.reset();
    }    
  },
};
</script>
