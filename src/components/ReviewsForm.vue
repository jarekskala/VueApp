<template>
    <card>
        <form @submit.prevent="handleSubmit">
            <h2>How would you rate your service with us?</h2>
            <!-- Rating component -->


            <RatingSelect 
            :rating="rating"
            @setRating="setRating"
            >
            
            </RatingSelect> 

            <div class="input-group">
                <input type="text" placeholder="Write a review" v-model="text">
                <button type="submit" class="btn btn-primary" :disabled="text.length < 2">Odešli</button>
            </div>

            <div class="message" v-show="text.length < 2">
                Text must be at least 2 characters 
            </div>
        </form> 
    </card>
</template>


<script setup> 
    // IMPORTS
    import {ref, watch} from "vue"; 
    import Card from "./shared/Card.vue"
    import RatingSelect from "./RatingSelect.vue"
    import {useReviewsStore} from "../stores/reviews"
    import { storeToRefs } from "pinia";

    const store = useReviewsStore(); 

    // DATA
    const text = ref('');
    const btnDisabled = ref(false);
    const message = ref('');
    const rating = ref(10);

    const {editedContent} = storeToRefs(store); 

    // WATCHERS
    watch(editedContent, newData => {    
         if(newData.editable) {
            text.value = newData.item.text;
            rating.value = newData.item.rating; 
         }
    }); 

    // METHODS
    const getAcutalDay = () => {
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear()
        return datetime; 
    }

    const handleSubmit = () => {
        const newReview = {
            text: text.value,
            rating: rating.value,  
            time: getAcutalDay() 
        };
       
        if(!store.editedContent.editable) {
            store.addReview(newReview); 
            text.value = ""; 
        } else {
            store.updateReview({
                ...newReview,
                id: store.editedContent.item.id,   
            });
            text.value = "";  
            rating.value = 10; 
        }
        
    };
    const setRating = (val) => {
       rating.value = val; 
    }
</script>


<style lang="scss" scoped> 

</style>


