<template>
    <!-- The application in employee view -->
  <div @employeeadditem="EmployeeAddItem">
      <product-display />
  </div>
</template>

<script>
import ProductDisplay from '../Products/Employee/ProductDisplay.vue';
export default {
  components: { ProductDisplay },
  methods: {
    EmployeeAddItem(product) {
      this.emit("new-orderproduct", product);
    },
  },
};
</script>

<style>
</style>