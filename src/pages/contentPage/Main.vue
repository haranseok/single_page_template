<template>
    <main>
        <div class="main_wrapper max_width m0ato">
            <div class="main_title">
                <h1 v-html="$t('title')" class="txt_center"></h1>
                <p v-html="$t('message')" class="txt_center ko"></p>
            </div>
            <div class="scroll_down position cp" @click="arrowDown">
                <p>scroll</p>
                <span class="arrow_down"></span>
            </div>
        </div>
    </main>
</template>
    
<script setup lang="ts">
import { defineEmits } from 'vue';
    const emit = defineEmits(['moveContent']);
    const arrowDown = () => {
        emit('moveContent')
    }
</script>
    
<style lang="scss" scoped>
    main{
        width: 100%;
        height: 100%;
        background: url('@/assets/images/mainImg.png');
        background-size: cover;
        position: relative;
    .main_wrapper{
        color: rgb(213, 222, 233);
        .main_title{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            h1{
                margin-bottom: 5%;
            }
            .ko{
                text-transform: uppercase;
            }
        }
        .scroll_down{
            display: flex;
            flex-direction: column;
            align-items: center;
            p{
                text-transform: capitalize;
                letter-spacing: 5px;
            }
            .arrow_down{
                display: block;
                width: 0.5px;
                height: 70px;
                margin-top: 15px;
                background: rgba(171, 171, 171, 0.5);
                position: relative;
                &::after{
                    content: '';
                    position: absolute;
                    top:0;
                    left: 0;
                    width: 1px;
                    height: 10px;
                    background: #fff;
                    animation: scrollMove 1.5s infinite;
                }
            }
        }
        .position{
            position: absolute;
            left: 50%;
            bottom: -55px;
            transform: translate(-50%,-50%);
            }
        }
    }
    
    @keyframes scrollMove {
        0% {top:0px;}
        100% {top: 70px}
    }
    
    @media screen and (max-width: 768px) {
        .main_wrapper{
        color: rgb(213, 222, 233);
        .main_title{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            h1{
                margin-bottom: 5%;
            }
        }
        .scroll_down{
            display: flex;
            flex-direction: column;
            align-items: center;
            p{
                text-transform: capitalize;
                letter-spacing: 5px;
            }
            .arrow_down{
                display: block;
                width: 0.5px;
                height: 70px;
                margin-top: 15px;
                background: rgba(171, 171, 171, 0.5);
                position: relative;
                &::after{
                    content: '';
                    position: absolute;
                    top:0;
                    left: 0;
                    width: 1px;
                    height: 10px;
                    background: #fff;
                    animation: scrollMove 1.5s infinite;
                }
            }
        }
        .position{
            position: absolute;
            left: 50%;
            bottom: -55px;
            transform: translate(-50%,-50%);
            }
        }
    }

</style>