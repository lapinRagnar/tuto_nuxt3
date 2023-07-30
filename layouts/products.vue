<template>
  <div>

    <header class="bg-orange-300 shadow-md">
      <nav class="container mx-auto p-4">
        <nuxt-link to="/products" class="font-bold">Nuxt dojo merch</nuxt-link>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-4">
      <ul class="flex gap-4">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/products">Products</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </footer>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .router-link-exact-active {
    color: red;
  }
</style>