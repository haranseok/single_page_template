<template>
    <article>
       <div class="container_inner">
            <h1 class="title right">secret town history</h1>
            <div class="time_box">
                <div class="time_inner">
                    <div class="since_box" v-for="(since, i) in data" :key="i">
                        <h3>{{ since.year }}</h3>
                        <p>{{ since.content }}</p>
                    </div>
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
        position: relative;
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
        .time_inner{
            width:calc(100% - 80px);
            max-width: 600px;
            margin: auto;
            padding: 5% 0 30% 0;
            .since_box{
                width: calc(50% - 40px);
                margin: 5% 0;
                h3{
                    position: relative;
                    font-size: 3rem;
                    color: rgba(111, 108, 181, 0.5);
                    text-align: right;
                    &::after{
                        content: '';
                        display: block;
                        width: 20px;
                        height: 20px;
                        position:absolute;
                        top: 25px;
                        right: -50px;
                        border-radius: 50%;
                        border: 3px solid rgb(68, 67, 95);
                        background: rgb(241, 245, 253);
                    }
                }
                p{
                    font-size: 0.95rem;
                    color: rgb(68, 67, 95);
                }
                &:nth-child(2n){
                    max-width: 250px;
                    position: absolute;
                    left: 53.5%;
                    margin: -5% 0;
                    text-align: left;
                    h3{
                        text-align: left;
                    &::after{
                        content: '';
                        display: block;
                        width: 20px;
                        height: 20px;
                        position:absolute;
                        top: 25px;
                        left: -52px;
                        border-radius: 50%;
                        border: 3px solid rgb(68, 67, 95);
                    }
                }
                }
                &:nth-child(8){
                    margin-top: 1%;
                }
                &:nth-child(9){
                    max-width: 300px;
                    position: absolute;
                    left: 21.7%;
                }
            }
        }
    }
</style>