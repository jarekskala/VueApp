<template>
  <div class="home">
    <div class="container">
      <!-- Reviews form -->
      <reviews-form/> 

      <!-- Reviews stats-->
      <reviews-stats/>

      <!-- Reviews list --> 
      <reviews-list/> 
    </div>
  </div>
</template>


<script setup>
  // IMPORTS
  import ReviewsForm from '../components/ReviewsForm.vue'; 
  import ReviewsStats from '../components/ReviewsStats.vue'; 
  import ReviewsList from '../components/ReviewsList.vue';  
</script>
 

<style lang="scss" scoped>

</style>
