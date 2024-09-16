<template>
    <div class="flex flex-col w-full gap-10 mt-14 lg:mt-20">
        <div class="flex items-center justify-between px-6 lg:px-20">
            <div class="text-resla-ebony-10 text-heading-1 leading-[40px] font-medium -trackinng-[3%]">Search by location</div>
            <!-- Custom Carousel Control Buttons -->
            <div class="flex space-x-4">
                <button @click="prev" class="size-11 rounded-lg p-2.5 bg-resla-ebony-90 border border-resla-ebony-70">
                    <ChevronLeft class="size-6"></ChevronLeft>
                </button>
                <button @click="next" class="size-11 rounded-lg p-2.5 bg-resla-ebony-90 border border-resla-ebony-70">
                    <ChevronLeft class="size-6 rotate-180"></ChevronLeft>
                </button>
            </div>

        </div>
        <div class="location-carousel w-full overflow-hidden border border-resla-ebony-70">
            <div class="location-inner " ref="inner" :style="innerStyles">
                <div class="location-card  w-60 min-w-60  p-4 inline-flex flex-col items-center justify-center h-40 cursor-pointer border-r border-resla-ebony-70 gap-2 bg-primary-1000"
                    v-for="(location, index) in cards" :key="index">
                    <div class="size-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M20 10.1482C20 -0.71602 4 -0.7161 4 10.1482C4 13.7179 6.13282 16.7609 8.19599 18.8695C9.6105 20.3152 10.3178 21.038 12.0002 21.038C13.6827 21.038 14.3899 20.3151 15.8044 18.8694C17.8674 16.7608 20 13.7178 20 10.1482ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34318 13.6569 7.00003 12 7.00003C10.3431 7.00003 9 8.34318 9 10C9 11.6569 10.3431 13 12 13Z"
                                fill="#D6D2CD" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.75 10.1482C4.75 7.63087 5.66985 5.80032 7.00337 4.59302C8.34965 3.37416 10.1636 2.75 12 2.75C13.8364 2.75 15.6504 3.37418 16.9966 4.59304C18.3301 5.80035 19.25 7.63089 19.25 10.1482C19.25 13.4221 17.2847 16.2839 15.2683 18.3449C14.5408 19.0884 14.0747 19.5589 13.5981 19.8644C13.1668 20.1408 12.7127 20.288 12.0002 20.288C11.2877 20.288 10.8336 20.1409 10.4023 19.8644C9.9257 19.559 9.45955 19.0885 8.73207 18.345C6.71544 16.284 4.75 13.4221 4.75 10.1482ZM20.75 10.1482C20.75 7.23337 19.6699 4.98983 18.0034 3.48107C16.3496 1.98387 14.1636 1.25001 12 1.25C9.83643 1.24999 7.65035 1.98385 5.99663 3.48105C4.33015 4.98981 3.25 7.23335 3.25 10.1482C3.25 14.0136 5.5502 17.2379 7.65992 19.3941L7.70691 19.4421L7.70693 19.4421C8.37418 20.1242 8.95657 20.7195 9.59294 21.1274C10.2895 21.5738 11.0303 21.788 12.0002 21.788C12.9702 21.788 13.711 21.5737 14.4075 21.1273C15.0439 20.7194 15.6262 20.1241 16.2935 19.442L16.2935 19.4419L16.3405 19.3939C18.45 17.2377 20.75 14.0135 20.75 10.1482ZM9.75 10C9.75 8.75739 10.7574 7.75003 12 7.75003C13.2426 7.75003 14.25 8.75739 14.25 10C14.25 11.2427 13.2426 12.25 12 12.25C10.7574 12.25 9.75 11.2427 9.75 10ZM12 6.25003C9.92893 6.25003 8.25 7.92896 8.25 10C8.25 12.0711 9.92893 13.75 12 13.75C14.0711 13.75 15.75 12.0711 15.75 10C15.75 7.92896 14.0711 6.25003 12 6.25003Z"
                                fill="#54504C" />
                        </svg>

                    </div>
                    <div class="text-resla-ebony-20 text-2xl font-medium leading-[38px] -tracking-[2%]">{{ location.city
                        }}</div>
                    <div class="text-resla-ebony-20 text-sm font-urbanist">{{ location.state }}</div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import ChevronLeft from '../icons/ChevronLeft.vue'

export default {
    name:'LocationsSearch',
    components:{
        ChevronLeft
    },
    data() {
        return {
            cards: [{ city: "Chandler", state: "AZ" }, { city: "Phoenix", state: "AZ" }, { city: "Tempe", state: "AZ" }, { city: "Mesa", state: "AZ" }, { city: "Glendale", state: "AZ" }, { city: "Gilbert", state: "AZ" }, { city: "Scottsdale", state: "AZ" }, { city: "Overland Park", state: "KS" }, { city: "Olathe", state: "KS" }, { city: "Liberty", state: "MO" }, { city: "Chesterfield", state: "MO" }, { city: "St. Charles", state: "MO" }, { city: "Lebanon", state: "MO" }, { city: "Independence", state: "MO" }, { city: "Brentwood", state: "MO" }, { city: "Olivette", state: "MO" }, { city: "Kansas City", state: "MO" }, { city: "St. Louis", state: "MO" }, { city: "Fenton", state: "MO" }, { city: "Valley Park", state: "MO" }, { city: "Columbia", state: "MO" }, { city: "Las Vegas", state: "NV" }, { city: "Brentwood", state: "TN" }, { city: "Nashville", state: "TN" }, { city: "Houston", state: "TX" }, { city: "Bee Cave", state: "TX" }, { city: "Euless", state: "TX" }, { city: "Fort Worth", state: "TX" }, { city: "San Antonio", state: "TX" }, { city: "Arlington", state: "TX" }, { city: "Grand Prairie", state: "TX" }, { city: "Austin", state: "TX" }, { city: "Dallas", state: "TX" }],
            innerStyles: {},
            step: '',
            transitioning: false
        }
    },

    mounted() {
        this.setStep()
        this.resetTranslate()
    },

    methods: {
        setStep() {
            const innerWidth = this.$refs.inner.scrollWidth
            const totalCards = this.cards.length
            this.step = `${innerWidth / totalCards}px`
        },

        next() {
            if (this.transitioning) return

            this.transitioning = true

            this.moveLeft()

            this.afterTransition(() => {
                const card = this.cards.shift()
                this.cards.push(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },

        prev() {
            if (this.transitioning) return

            this.transitioning = true

            this.moveRight()

            this.afterTransition(() => {
                const card = this.cards.pop()
                this.cards.unshift(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },

        moveLeft() {
            this.innerStyles = {
                transform: `translateX(-${this.step})
                      translateX(-${this.step})`
            }
        },

        moveRight() {
            this.innerStyles = {
                transform: `translateX(${this.step})
                      translateX(-${this.step})`
            }
        },

        afterTransition(callback) {
            const listener = () => {
                callback()
                this.$refs.inner.removeEventListener('transitionend', listener)
            }
            this.$refs.inner.addEventListener('transitionend', listener)
        },

        resetTranslate() {
            this.innerStyles = {
                transition: 'none',
                transform: `translateX(-${this.step})`
            }
        }
    }
}
</script>

<style scoped>
.location-inner {
    transition: transform 0.2s;
    white-space: nowrap;
    display: flex;
}
</style>