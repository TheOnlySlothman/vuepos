<template>
    <!-- Product in Admin view -->
    <div class="admin-product">
        <label>
            Display
            <input name="displayed" type="checkbox" :value="product.displayed" @change="onPropertyChanged">
        </label>
        <input name="name" type="text" :value="product.name" @change="onPropertyChanged">
        <input name="description" type="text" :value="product.description" @change="onPropertyChanged">
        <input name="price" type="number" :value="product.price" @change="onPropertyChanged">
        <input name="quantity" type="number" :value="product.quantity" @change="onPropertyChanged">
        <button id="removeUpdateButton" @click="removeUpdateButtonClicked">Remove</button>
    </div>
</template>

<script>
import Product from '../../../models/Product'
import vueposLogger from '../../../models/vueposLogger';

export default {
    props: {
        product: [Product, Object]
    },
    data: () => ({
        updatedProduct: [Product, Object]
    }),
    created() {
        this.updatedProduct = {...this.product};
    },
    methods: {
        removeUpdateButtonClicked(e) {
            let type = e.target.innerText;
            this.updateButtonText();

            if (type == 'Remove') return this.removeButtonClicked(e);
            else if (type == 'Update') return this.updateButtonClicked(e);
            else return alert(`Action "${type}" not handled in click handler!`);
        },
        updateButtonClicked() { this.$emit('update-product', this.product, this.updatedProduct) },
        removeButtonClicked() { this.$emit('remove-product', this.product); },
        onPropertyChanged(e) {
            let property = e.target.name;
            let preValue = this.updatedProduct[property];
            let changeColor = 'color:#dddd00';
            let white = "color:#fff";

            var value = (function getParseType(property, value) {
                switch (typeof property) {
                    case "number": return parseFloat(value);
                    case "boolean": return value == "true";
                    case "string": default: return value;
                }
            })(this.product[property], e.target.value);

            this.updatedProduct[property] = value;
            vueposLogger(`Property "${property}" was updated from %c${preValue} %cto %c${value}%c.`, 
                changeColor, white, changeColor, white);
        
            this.updateButtonText();
        },
        updateButtonText() {
            let btn = document.getElementById('removeUpdateButton');
            btn.innerText = btn.innerText == "Update" ? "Remove" : "Update";
        }
    }
}
</script>

<style>

</style>