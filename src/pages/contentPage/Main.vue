<template>
    <main>
        <div class="main_wrapper max_width m0ato">
            <h1>{{ $t('title') }}</h1>
            <p>{{ $t('message') }}</p>
            <ArrowDownIcon class="position" @moveContent="move"/>
        </div>
    </main>
</template>
    
<script setup lang="ts">
    import ArrowDownIcon from '@/components/item/AnimaionIcon.vue'
    const move = () => {
        console.log('movemove')
    }
</script>
    
<style lang="scss" scoped>
    main{
        width: 100%;
        height: 100%;
        background: #1c2135;
        position: relative;
    .main_wrapper{
        padding: 10%;
        color: rgb(163, 166, 169);
        .position{
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translate(-50%,-50%);
            }
        }
    }
</style>