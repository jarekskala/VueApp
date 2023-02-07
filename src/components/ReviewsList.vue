<template>
    <div>
        <p v-show="!store.reviewsCount" class="no-reviews"> <i class="fas fa-info-circle"></i> No reviews yet.</p>
        <div class="reviewList">
            <reviews-item
            v-for="(item, index) in store.reviewsContent" 
            :key="index"  
            :item="item"  
            />  
        </div>
    </div>
</template>
    
  
<script setup>
    import ReviewsItem from "./ReviewsItem.vue"
    import {useReviewsStore} from "../stores/reviews"

    const store = useReviewsStore(); 
 
</script> 


<style lang="scss" scoped>
    .no-reviews {
        font-size: 23px;
        margin: 71px 0 0 0;
        text-align: center;
        i {
            margin: 0 5px 0 0; 
        }
    }
</style>
  