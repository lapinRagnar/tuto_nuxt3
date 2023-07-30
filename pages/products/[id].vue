<template>
  <div>
    <h2>Detail Produit - {{ id }}</h2>
  </div>
</template>

<script setup>
  const {id} = useRoute().params

  definePageMeta({
    layout: 'products'
  })
</script>

<style lang="scss" scoped>

</style>