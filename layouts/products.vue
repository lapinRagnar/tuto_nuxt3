<template>
  <div>

    <header>
      <nav>
        <nuxt-link to="/products">Nuxt dojo merch</nuxt-link>
      </nav>
    </header>

    <!-- output the page content -->
    <div>
      <slot />
    </div>

    <footer>
      <ul>
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