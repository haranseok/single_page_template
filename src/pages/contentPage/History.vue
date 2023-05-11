<template>
    <article>
       <div class="container_inner">
            <h1 class="title right">secret town history</h1>
            <div class="time_box">
                <div class="time_wrap" v-for="(since, i) in data" :key="i">
                    <h3>{{ since.year }}</h3>
                    <p>{{ since.content }}</p>
                </div>
            </div>
       </div>
    </article>
</template>

<script setup>
import { ref } from 'vue';
import historyData from '@/api/HistoryData.json';

const data = historyData;

console.log(data)

</script>

<style lang="scss" scoped>
article{
    background: rgba(234, 240, 252, 0.5);
}

    .time_box{
        width:calc(100% - 80px);
        max-width:800px;
        margin:auto;
        position: relative;
        left:-5px;        
        &::before{
            content: '';
            position: absolute;
            top:0;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 4px;
            border-radius: 5px;
            background: rgb(68, 67, 95);
        }
        .time_wrap{
            background: lime;
        }
    }
</style>