<template>
    <div class="feedback-stats">
        <h4>{{store.reviewsCount ? store.reviewsCount : "0"}} Reviews</h4>
        <h4>
            Average Rating: 
            <span :class="setRatingLevelClass(store.averageRating)">
                {{ isNaN(store.averageRating) ? 0 : store.averageRating }}
            </span>
            
        </h4> 
    </div> 
</template> 


<script setup> 
    // IMPORTY 
    import {useReviewsStore} from "../stores/reviews";
    import {setRatingLevelClass} from "../helpers"; 

    const store = useReviewsStore(); 
</script>


<style lang="scss" scoped> 

</style>
