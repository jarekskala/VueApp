<template>
  <div>
    <TheHeader />

    <RouterView />
  </div>
  
</template>

<script setup>
  import { onMounted } from "@vue/runtime-core";
  import {RouterView} from "vue-router"; 
  import Header from "./components/TheHeader.vue";  
  import {useReviewsStore} from "./stores/reviews"

  const store = useReviewsStore(); 
  
  onMounted(() => {
    store.fetchReviews(); 
  })
  
</script> 

  