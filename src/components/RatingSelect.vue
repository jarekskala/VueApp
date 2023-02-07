<template>
    <ul class="rating">
        <li v-for="n in 10" :key="`rating-${n}`">  
            <input 
            type="radio"
            :id="`num${n}`"
            name="rating"
            :value="n" 
            v-model="selected"
            :checked="selected === n"> 

            <label :for="`num${n}`" :class="setRatingLevelClass(n)">
                {{ n }}
            </label>
        </li>
    </ul>
</template>


<script setup> 
// IMPORTS 
import {ref, watch, computed} from "vue";
import {setRatingLevelClass} from "../helpers";   



// DATA
const selected = ref(props.rating);  

// PROPS
const props = defineProps({
    rating: {
        type: Number
    }
}); 

// EMITS
const emits = defineEmits(["set-rating"]);  

// WATCHERS
watch(selected, newVal => {    
    emits("set-rating", newVal);  
}); 
 

// CALLS


watch(() => props.rating, (newVal) => { 
    selected.value = newVal; 
});  
</script>


<style lang="scss" scoped> 

</style>
