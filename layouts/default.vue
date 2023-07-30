<template>
  <div>
    <header class="bg-red-300">
      <nav class="container mx-auto p-4 flex justify-between">
        <nuxt-link to="/" class="font-bold">Huxt dojo</nuxt-link>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/products">Products</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div>
      <slot />
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .router-link-exact-active {
    color: red;
  }
</style>