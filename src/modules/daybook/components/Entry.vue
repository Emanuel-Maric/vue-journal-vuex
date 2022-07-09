<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params:{id: 10}})"
  >
  <!-- Titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">09</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2022</span>
    </div>
    
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus natus odit blanditiis, architecto quia eaque? Fugit dolorem ipsam possimus, aliquam deserunt accusantium quaerat, distinctio corporis unde delectus, rerum cumque.


    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;


  &:hover {
    background-color: lighten($color: grey, $amount: 35);
    transition: 0.2s all ease-in;

  }
}

</style>