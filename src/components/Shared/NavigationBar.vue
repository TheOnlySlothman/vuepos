<template>
    <!-- Navigation bar - toggle between employee/admin mode -->
    <div id="navigation-bar">
        <label>
            Admin Mode
            <input id="adminModeCheckbox" type="checkbox" @click="onCheckboxChanged">
        </label>
    </div>
</template>

<script>
export default {
    props: {
        adminMode: Boolean
    },
    methods: {
        onCheckboxChanged() {
            let input = document.getElementById('adminModeCheckbox');
            this.$emit('admin-toggle', input.checked)
        }
    }
}
</script>

<style>

</style>