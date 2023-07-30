<template>
  <div>
    <h2>Detail Produit - {{ id }}</h2>
  </div>
</template>

<script setup>
  const {id} = useRoute().params
</script>

<style lang="scss" scoped>

</style>