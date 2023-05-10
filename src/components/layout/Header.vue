<template>
    <header :class="isNav === true? 'h_bg':''">
        <div class="h_wrapper max_width m0ato jcsb">
            <div class="logo">
                <img src="@/assets/logo/secrettown_logo.png" alt="logo">
            </div>
            <div class="nav_wrapper">
                <Transition name="nav_animation">
                    <nav v-if="isNav" :class="isNav === true? 'active':''">
                        <ul class="flex menu">
                            <li v-for="(menu, i) in menuList" :key="i" :data-hover="menu" class="cp">{{ menu }}</li>
                            <li class="cp language">
                                <v-icon @click="isLangChange = !isLangChange">mdi-web</v-icon>
                                <div class="lang_box" v-if="isLangChange">
                                    <span v-for="(lang, i) in language" :key="i"
                                        @click="setLang(i)">
                                        {{ lang === 'ko' ? '한국어':'english' }}
                                    </span>
                                </div>
                            </li>
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
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const {availableLocales, locale} = useI18n();
const language = availableLocales;
const menuList = ref(['about','services', 'history', 'partners', 'content']);

const isNav = ref(false);
const isLangChange = ref(false);

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
};

const setLang = (lang: Number) => {
    if(lang === 0){
        locale.value = 'en'
    }else{
        locale.value = 'ko'
    }
    isLangChange.value = false;
};

onMounted(() => {
    getWindowWidth()
});

</script>

<style lang="scss" scoped>
header{
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 99;
    .h_wrapper{
        height: 80px;
        padding: 1% 0;
        .logo{
            width: 150px;
            img{
                width: 100%;
            }
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
                color: rgba(187, 192, 211, 0.5);
                padding: 0 20px;
                &::before{
                    color: rgb(214, 223, 254);
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
    
    .language{
        position: relative;
        .lang_box{
            width: 100px;
            background: #c2c8c5;
            // box-shadow: 2px 1px 20px 5px rgba(205, 205, 198, 0.5);
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: -25px;
            border-radius: 3px;
            span{
                display: block;
                padding: 10px;
                font-size: 0.85rem;
                font-weight: bold;
                text-align: center;
                color: #577b95;
                border-radius: 3px;
                transition: all 0.3s;
                &:hover{
                    color: #b1b5bd;
                    background: #303549;
                    transition: all 0.3s;
                }
            }
        }
    }

}
@media screen and (max-width: 768px) {
    .h_bg{
        transition: all 0.3s ease;
        background: #e7e9ee;
        .h_wrapper{
            .berger{
                color: rgba(135, 148, 192,1);
            }
        }
    }
.nav_wrapper{
    nav{
        position: absolute;
        top: 80px;
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
        background: rgb(231, 233, 238);
    }
    .berger{
        display: block;
        color: rgb(228, 234, 255);
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