<template>
    <header :class="isNav === true? 'h_bg':''">
        <div class="h_wrapper max_width m0ato jcsb">
            <div class="logo">
                logo
            </div>
            <div class="nav_wrapper">
                <Transition name="nav_animation">
                    <nav v-if="isNav" :class="isNav === true? 'active':''">
                        <ul class="flex menu">
                            <li class="cp" data-hover="home">home</li>
                            <li class="cp" data-hover="content">content</li>
                            <li class="cp" data-hover="about">about</li>
                            <li class="cp language" @click="languageChange"><v-icon>mdi-web</v-icon></li>
                        </ul>
                    </nav>
                </Transition>
                <div class="berger cp" @click="navOpen">
                    <v-icon>mdi-menu</v-icon>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineEmits } from 'vue';

const isNav = ref(false);

const emit = defineEmits(["language_change"]);
const languageChange = () => {
    emit("language_change")
}
const resize = () => {
    window.addEventListener('resize', ()=>{
        if(window.innerWidth <= 766){
            isNav.value = false;
        }else{
            isNav.value = true;
        }
    })
};

const getWindowWidth = () => {
    if(window.innerWidth > 766){
        isNav.value = true;
    }else{
        isNav.value = false;
    }
    resize();
};

const navOpen = () => {
    isNav.value = !isNav.value
}

onMounted(()=>{
    getWindowWidth()
});

</script>

<style lang="scss" scoped>
header{
    width: 100%;
    background: #1c2135;
    .h_wrapper{
        height: 60px;
        padding: 1% 0;
        .logo{
            font-weight: bold;
            font-size: 1.5rem;
            text-transform: capitalize;
            color: #5a6794;
        }
    }
}
*::after, *::before{box-sizing: border-box;}
.nav_wrapper{
    nav{
        ul{
            box-sizing: border-box;
            li{
                position: relative;
                display: block;
                text-decoration: none;
                text-transform: uppercase;
                color: rgba(135, 148, 192,0.5);
                padding: 10px;
                &::before{
                    color: rgba(135, 148, 192,1);
                    content: attr(data-hover);
                    position: absolute;
                    transition: transform 0.3s, opacity 0.3s;
                    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
                    -moz-transition: -moz-transform 0.3s, opacity 0.3s;
                }
                &:hover::before, &:focus::before {
                    -webkit-transform: scale(0.9);
                    -moz-transform: scale(0.9);
                    transform: scale(0.9);
                    opacity: 0;
                }
            }
        }
        
    }
    .berger{
        display: none;
    }

}
@media screen and (max-width: 766px) {
    .h_bg{
        transition: all 0.3s ease;
        background: #e7e9ee;
        .h_wrapper{
            .logo, .berger{
                color: rgba(135, 148, 192,1);
            }
        }
    }
.nav_wrapper{
    nav{
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        height: 0;
        z-index: 9;
        transition: all 0.3s ease;
        ul{
            width: 90%;
            height: 0;
            margin: 5% auto;
            display: flex;
            flex-direction: column;
            li{
                width: 100%;
                padding: 10px 5px;
                color: rgba(135, 148, 192,0.5);
                &::before{
                    color: rgba(135, 148, 192,1);
                }
            }
            .language{
                display: none;
            }
        }
    }
    .active{
        height: 93.8vh;
        background: #e7e9ee;
    }
    .berger{
        display: block;
        color: #5a6794;
    }

}
.nav_animation-enter-active,
.nav_animation-leave-active {
    transition: opacity 0.3s ease;
}

.nav_animation-enter-from,
.nav_animation-leave-to {
    opacity: 0;
    transition: transform 0.5s ease;
}
}
</style>