<template>
  <div id="app">
    <navigation-bar :adminMode="adminMode" @admin-toggle="onAdminModeToggle" />
    <div id="content" v-if="adminMode">
      <admin-content :products="products" 
        @new-product="onNewProductAdded" 
        @remove-product="onRemoveProduct"
      />
    </div>
    <div id="content" v-else>
      <employee-content 

      />
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/Shared/NavigationBar.vue';
import AdminContent from './components/Shared/AdminContent.vue';
import EmployeeContent from './components/Shared/EmpoyeeContent';
import Product from './models/Product';

export default {
  name: 'App',
  components: { NavigationBar, AdminContent, EmployeeContent },
  data: () => ({
    adminMode: false,
    products: [
      new Product("Brød", "Der er ingen beskrivelse om, hvilket slags brød, det er.", 12, 25),
      new Product("Lun Leverpostej", "Den er i hvert fald lun, hvis du hente den nu", 5, 20),
      new Product("Ice T", "Branded så godt, at der er ingen grund til at skrive \"Tea\"", 14, 2)
    ]
  }),
  methods: {
    /**@param {Product} product */
    onNewProductAdded(product) {
      this.products.push(product);
    },
    /**@param {Product} product */
    onRemoveProduct(product) {
      this.products.splice(this.products.indexOf(product), 1);
    },
    /**@param {Boolean} checked */
    onAdminModeToggle(checked) {
      this.adminMode = checked;
      // alert(`You are now in ${(this.adminMode ? "Admin" : "Employee")} Mode`);
    },



    saveData() {
      localStorage.setItem('data', JSON.stringify(this.$data));
    },
    loadData() {
      this.$data = JSON.parse(localStorage.getItem('data'));
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
