<template>
    <div class="flex flex-col items-center justify-center w-full mt-16 lg:mt-24">
        <div class="flex flex-col justify-self-center items-center justify-center gap-6 max-w-lg">
            <div class="font-medium text-heading-1 leading-10 text-resla-ebony-20 tracking-negative-3 text-center">Models</div>
            <div class="text-resla-ebony-40 text-xl leading-8 font-normal text-center font-urbanist">With its advanced crash avoidance
                technology and high-strength reinforcement structure, you can feel confident and secure behind the
                wheel.</div>
        </div>
        <div class="mt-10 lg:mt-20 flex flex-col lg:flex-row gap-6 w-full">
            <ModelCard v-for="model in models" :key="model.name" :model-detail="model"></ModelCard>
        </div>
    </div>
</template>
<script>
import ModelCard from '@/components/base/ModelCard.vue'
export default {
    name: "ModelsSection",
    components:{
        ModelCard
    },
    data() {
        return {
            models: [
                // more keys can be added to make it dynamic and can be fetched from api or store
                {
                    name: 'Model 3',
                    imageUrl:'model-3.png', // can be replaced with url
                    rent: '69',
                    range: '272',
                    zeroToSixty: '5.1', // 0-60 mph time, adjust as needed
                    topSpeed: '162', // Top speed, adjust as needed
                    dualAWD: true, // Dual all-wheel drive status
                    colors: ['paint-red', 'paint-blue', 'paint-black']
                },
                
                {
                    name: 'Model Y',
                    imageUrl:'model-3.png',
                    rent: '79',
                    range: '272',
                    zeroToSixty: '3.1', 
                    topSpeed: '162', 
                    dualAWD: true,
                    colors: ['paint-red', 'paint-blue', 'paint-black'] 
                }
            ]
        }
    },
};
</script>