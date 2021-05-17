<template>
    <div>
        <!-- Big fat button -->
        <div>
            <p>{{product.name}}</p>
            <p>{{product.price}}</p>
        </div>
    </div>
</template>

<script>
import Product from '../../../models/Product';
export default {
    props: {
        product: Product
    },
    methods: {
        EmployeeMenuProductItemClick(){
            this.$emit("employeemenuproductitemclick", this.product);
        }
    }
}
</script>

<style>

</style>