<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">Huxt dojo</nuxt-link>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/products">Products</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <h2>Home</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur commodi voluptate eaque, sequi repellendus architecto ullam. Odio, nemo reprehenderit!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde nisi provident perspiciatis quis nihil accusantium corporis quibusdam rerum accusamus.</p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p{
    margin: 20px 0;
  }
</style>