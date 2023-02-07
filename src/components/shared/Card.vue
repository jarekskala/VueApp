<template>
    <div class="card" :class="{reverse : reverse}">  
        <slot></slot> 
    </div>
</template>


<script setup>  
    // PROPS
    const props = defineProps({
        reverse: {
            type: Boolean,
            default: false 
        }
    })
</script>


<style lang="scss" scoped> 
    .card {
        background: white;
        color: #212121;
        &.reverse {
            background: #212121; 
            color: white; 
        }
    }
</style>


