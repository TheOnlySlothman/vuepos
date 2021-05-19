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
import vueposLog from './models/vueposLogger';

let defaultProducts = [
  new Product("Brød", "Der er ingen beskrivelse om, hvilket slags brød, det er.", 12, 25),
  new Product("Lun Leverpostej", "Den er i hvert fald lun, hvis du hente den nu", 5, 20),
  new Product("Ice T", "Branded så godt, at der er ingen grund til at skrive \"Tea\"", 14, 2)
];

export default {
  name: 'App',
  components: { NavigationBar, AdminContent, EmployeeContent },
  data: () => ({
    adminMode: false,
    products: defaultProducts,
    localStorageName: 'products'
  }),
  created() {
    this.loadData();
  },
  methods: {
    /**@param {Product} product */
    onNewProductAdded(product) {
      this.products.push(product);
      vueposLog(`Added product ${product.quantity} "${product.name}" for the price: ${product.price}`);
      this.saveData();
    },
    /**@param {Product} product */
    onRemoveProduct(product) {
      let productIndex = this.products.indexOf(product);
      if (productIndex < 0 || productIndex >= this.products.length) return alert(`Product isn't in products list!`);

      this.products.splice(productIndex, 1);
      vueposLog(`Removed product "${product.name}" from products.`);

      this.saveData();
    },
    /**@param {Boolean} checked */
    onAdminModeToggle(checked) {
      this.adminMode = checked;
      vueposLog(`Switched content to: %c${(this.adminMode ? "Admin" : "Employee")} Mode`, 
        "color:#77ccff; font-weight: bold; text-decoration: underline;"
      );
      // alert(`You are now in ${(this.adminMode ? "Admin" : "Employee")} Mode`);
    },

    saveData() {
      localStorage.setItem(this.localStorageName, JSON.stringify(this.$data.products));
      vueposLog(`Saved products to localStorage as "${this.localStorageName}"`)
    },
    loadData() {
      this.$data.products = JSON.parse(localStorage.getItem(this.localStorageName));
      if (this.$data.products) vueposLog(`Loaded products from localStorage from name: "${this.localStorageName}"`)
      else {
        this.$data.products = [];
        vueposLog(`No products were found using localStorageName "${this.localStorageName}"`);
      }
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
