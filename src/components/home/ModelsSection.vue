<template>
    <div class="flex flex-col items-center justify-center w-full mt-16 lg:mt-24">
        <div class="flex flex-col justify-self-center items-center justify-center gap-6 max-w-lg">
            <div class="font-medium text-heading-1 leading-10 text-resla-ebony-20 tracking-negative-3 text-center">Models</div>
            <div class="text-resla-ebony-40 text-xl leading-8 font-normal text-center font-urbanist">With its advanced crash avoidance
                technology and high-strength reinforcement structure, you can feel confident and secure behind the
                wheel.</div>
        </div>
        <div class="mt-10 lg:mt-20 flex flex-col lg:flex-row gap-6 w-full">
            <div v-for="model in models" :key="model.name" class="border w-full border-resla-ebony-70 rounded-xl bg-resla-ebony-90 overflow-hidden">
                <img :src="getImageUrl(model.imageUrl)" class="flex rounded-t-xl w-full"/>
                <div class="p-6 md:p-10 gap-6 w-full flex flex-col">
                    <!--modelName & rent-->
                    <div class="flex justify-between items-center">
                        <p class="font-medium text-[32px] leading-8 text-resla-ebony-20">
                            {{ model.name }}
                        </p>
                        
                        <div class="flex gap-6">
                            <!--colors-->
                            <div class="hidden md:flex items-center gap-3 ">
                                  <p class="font-normal text-resla-ebony-10 text-base leading-6">Available in</p>  
                                  <img src="@/assets/img/colors.png" alt="colors"/> 
                            </div>
                            <div class="flex">
                                <p class="text-heading-1 font-medium text-resla-ebony-20 leading-8"> ${{ model.rent }}</p>
                               
                                <sub class="inline-block text-xl font-normal">/day</sub>
                            </div>
                        </div>
                       
                    </div>
                    <div class="flex w-full md:hidden items-center gap-3">
                                  <p class="font-normal text-resla-ebony-10 text-base leading-6">Available in</p>  
                                  <img src="@/assets/img/colors.png" alt="colors"/> 
                     </div>
                    <div class="w-full border border-resla-ebony-70"></div>
                    <!--model detail-->
                        <div class="flex gap-8 items-center">
                            <div class="w-full block md:flex gap-3 items-center">
                                <div class="font-medium text-2xl leading-9 text-resla-ebony-10">
                                    {{ model.range }}
                                </div>
                                <div class="font-normal text-base text-resla-ebony-10 font-urbanist">
                                    mi Range
                                </div>
                            </div>
                            <div class="w-full block md:flex gap-3 items-center">
                                <div class="font-medium text-2xl leading-9 text-resla-ebony-10">
                                    0-60
                                </div>
                                <div class="font-normal text-base text-resla-ebony-10 font-urbanist">
                                    mph in {{model.zeroToSixty}}    sec
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 flex gap-8 items-center">
                            <div class="w-full block md:flex gap-3 items-center">
                                <div class="inline-block font-medium text-2xl leading-9 text-resla-ebony-10">
                                    {{ model.topSpeed }}
                                </div>
                                <div class="font-normal text-base text-resla-ebony-10 font-urbanist">
                                    mph top speed
                                </div>
                            </div>
                            <div class="w-full block md:flex gap-3 items-center">
                                <div class="inline-block font-medium text-2xl leading-9 text-resla-ebony-10">
                                    Dual
                                </div>
                                <div class="font-normal text-base text-resla-ebony-10 font-urbanist">
                                   AWD
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ModelsSection",
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
                    dualAWD: true // Dual all-wheel drive status
                },
                
                {
                    name: 'Model Y',
                    imageUrl:'model-3.png',
                    rent: '79',
                    range: '272',
                    zeroToSixty: '3.1', 
                    topSpeed: '162', 
                    dualAWD: true 
                }
            ]
        }
    },
    methods: {
    getImageUrl(imageName) {
      return require(`@/assets/img/models/${imageName}`);
    }
  }
};
</script>