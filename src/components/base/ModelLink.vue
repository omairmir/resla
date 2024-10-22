<template>
    <router-link :to="url" tag="div" class="flex flex-col gap-3 lg:gap-4 cursor-pointer group overflow-hidden" >
        <img :src="getImageUrl(imgSrc)" :alt="name" class="size-full max-h-52 object-cover rounded-xl">
        <div
            class="flex items-center justify-between text-resla-ebony-20 font-medium text-2xl leading-9 tracking-negative-2 pr-10 group-hover:pr-0 transition-all duration-200 ease-in-out">
            {{ name }}
            <div class="size-6 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out">

                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L13.5303 18.5303C13.2374 18.8232 12.7626 18.8232 12.4697 18.5303C12.1768 18.2374 12.1768 17.7626 12.4697 17.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L12.4697 6.53033C12.1768 6.23744 12.1768 5.76256 12.4697 5.46967Z"
                        fill="#323242" />
                </svg>

            </div>
        </div>
    </router-link>
</template>

<script>
export default {
name: "ModelLink",
props: {
    imgSrc: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
},
methods: {
    // remove this if images are not from assets
    getImageUrl(src) {
        return require(`@/assets/img/models/${src}`);
    }
}
};
</script>