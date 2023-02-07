<template>
    <div>
        <card>
            <button class="close" @click="store.deleteReview(item)"> 
                <i class="fas fa-times"></i>
            </button>
            <button class="edit" @click="store.editReview(item)">
                <i class="fas fa-edit"></i> 
            </button>
            <div class="num-display" :class="setRatingLevelClass(item.rating)"> 
                {{item.rating}}
            </div>
            <div class="created">
                <b>Vytvořeno:</b> {{item.time}}
            </div>
            
            <div class="text-display">
                {{item.text}} 
            </div>
        </card>
    </div>
</template>
    
  
<script setup>
    import Card from '../components/shared/Card.vue'; 
    import {useReviewsStore} from "../stores/reviews"
    import {setRatingLevelClass} from "../helpers";

    const store = useReviewsStore(); 


    // PROPS
    const props = defineProps({
        item: {
            type: Object, 
        }
    }); 
</script> 


<style lang="scss" scoped>
    .created {
        font-size: 13px;
    }
</style>
  