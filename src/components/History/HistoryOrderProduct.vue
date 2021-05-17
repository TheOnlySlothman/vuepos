<template>
    <div>
        <!-- Product from cart displayed in History -->
         <p>{{product.quantity}} - {{product.name}} - {{product.price}} 	XOF.</p>
        <p>{{product.description}}</p>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style>
template{
    width:200px;
    border:1px solid;
}
</style>