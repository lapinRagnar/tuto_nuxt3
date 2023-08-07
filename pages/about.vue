<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur commodi voluptate eaque, sequi repellendus architecto ullam. Odio, nemo reprehenderit!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde nisi provident perspiciatis quis nihil accusantium corporis quibusdam rerum accusamus.</p>
    <div>{{ data.EUR }}</div>
    <div>{{ data.USD }}</div>
  </div>
</template>

<script setup>

  const {data} = await useFetch('/api/currency/ninja')
  // const {data} = await useFetch('/api/ninja?name=lapinragnar', {
  //   method: 'post',
  //   body: {
  //     age: 15
  //   }
  // })
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