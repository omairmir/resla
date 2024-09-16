<template>
    <div class="w-full relative rounded-xl ">
        <video ref="videoRef" class="size-full rounded-xl" :src="url" :poster="computedPosterUrl" :controls="isPlaying"
            @play="updatePlayButton" @pause="updatePlayButton" @ended="updatePlayButton"></video>
        <button v-if="!isPlaying"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white size-10"
            @click="togglePlay">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.29995 2.84058C5.3011 2.21087 4 2.92869 4 4.10947V15.8906C4 17.0714 5.3011 17.7892 6.29995 17.1595L15.6436 11.2689C16.577 10.6805 16.577 9.3196 15.6436 8.73115L6.29995 2.84058Z"
                    fill="#0C0C11" />
            </svg>

        </button>
    </div>
</template>

<script>
export default {
    name: 'VideoPlayer',
    props: {
        url: {
            type: String,
            required: true,
        },
        posterUrl: {
            type: String,
            default: '@/assets/img/hero-video-poster.png',
        },
    },
    data() {
        return {
            isPlaying: false,
        };
    },
    computed: {
        computedPosterUrl() {
            // Check if the posterUrl starts with '@/assets/' for local assets
            if (this.posterUrl.startsWith('@/assets/')) {
                return require(`@/assets/img/${this.posterUrl.replace('@/assets/img/', '')}`);
            }
            return this.posterUrl;
        },
    },
    methods: {
        togglePlay() {
            const videoElement = this.$refs.videoRef;
            if (this.isPlaying) {
                videoElement.pause();
            } else {
                videoElement.play();
            }
        },
        updatePlayButton() {
            const videoElement = this.$refs.videoRef;
            this.isPlaying = !videoElement.paused;
        },
    },
    mounted() {
        const videoElement = this.$refs.videoRef;
        videoElement.addEventListener('play', this.updatePlayButton);
        videoElement.addEventListener('pause', this.updatePlayButton);
        videoElement.addEventListener('ended', this.updatePlayButton);
    },
    beforeDestroy() {
        const videoElement = this.$refs.videoRef;
        videoElement.removeEventListener('play', this.updatePlayButton);
        videoElement.removeEventListener('pause', this.updatePlayButton);
        videoElement.removeEventListener('ended', this.updatePlayButton);
    },
};
</script>

