<template>
    <article>
        <div class="container_inner">
            <h1 class="title">About</h1>
            <h3 class="subTitle ko_font">{{ $t('subTitle01') }}</h3>
            <section>
                <div v-for="(list, i) in aboutTextList.title" :key="i" 
                    class="txt_center cp"
                    :class="isActive === i ? 'active':''"
                    @click="currentActive(i)"
                >
                    <h4>{{ list }}</h4>
                    <p v-html="aboutTextList.subTitle[i]"></p>
                    <div class="text-box">
                        {{ aboutTextList.content[i] }}
                    </div>
                    <span class="line"></span>
                </div>
            </section>
        </div>
    </article>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const isActive = ref(1);
const aboutTextList = ref({
    title:['IT 핵심 개발 전문기업','메타버스 플랫폼 전문기업','가상 현실 VR, AR 전문기업'],
    subTitle: ['다년간 쌓아온 고도화된 기술과<br/>풍부한 R&D 경험','NFT 마켓플레이스, 오프라인 공간을 잇는<br/>메타버스 생태계 구축', '최상의 기능과 최적의 솔루션 제공'],
    content:['업계 최고 수준의 R&D 경험 인력들과 함께 IoT, 동작 및 공간 인식 등 다양한 센서 인식과 핵심 기술 자체를 확보하고 있으며 정부 국책 R&D 과제를 다수 수행한 바 있으며 여러 분야의 솔루션을 개발합니다.','온·오프라인 하이브리드 전시 공간을 통해 지속 가능한 NFT 생태계를 구축합니다. PFP 프로젝트로 메타버스 공간을 확대하고 secretToken 생태계를 구축하여 DAO를 형성해 커뮤니티를 확대하고자 합니다.','증강현실(Augmented Reality), 가상현실(Vitual Reality) 기능을 이용하여 개발 노하우 및 다양한 특허를 보유하고 있습니다. AR, VR, XR 기반 3D 콘텐츠 최적화 기술 개발로 어떤 환경에서도 놀라운 몰입감을 제공합니다.']
});

const currentActive = (val:number)=>{
    isActive.value =val 
}


</script>

<style lang="scss" scoped>
article{
    background: rgba(246, 249, 255, 0.2);
}

section{
    display: flex;
    justify-content: space-between;
     & > div{
        width: 30%;
        min-width: 200px;
        min-height: 300px;
        margin: 5% 0;
        padding: 3% 2%;
        position: relative;
        background: #fff;
        box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.1);
        border-radius: 3px;
        transition: all 0.3s;
        h4{
            color: rgb(68, 67, 95);
            font-size: 1.4rem;
        }
        p{
            margin: 20px 0;
            font-size: 1rem;
        }
        .text-box{
            font-size: 0.9rem;
        }
        .line{
            opacity: 0;
            width: 100%;
            height: 8px;
            position: absolute;
            left: 0;
            bottom: 0;
            background: rgb(68, 67, 95);
            border-radius: 0 0 3px 3px;
            transition: all 0.3s;
        }
        &:hover .line{
                opacity: 1;
                transition: all 0.3s;
            }
     }
     .active{
        transform: scale(1.1);
        .line{
            opacity: 1;
        }
     }
}
</style>