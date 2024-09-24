<template>
    <div class="flex flex-col w-full gap-10 mt-14 lg:mt-20">
        <div class="flex items-center justify-between px-6 lg:px-20">
            <div class="text-resla-ebony-10 text-heading-1 leading-[40px] font-medium -trackinng-[3%]">Search by location</div>
            <!-- Custom Carousel Control Buttons -->
            <div class="flex space-x-4">
                <CtaButton size="small" variant="secondary" class="size-11" @click="prev">
                    <ChevronLeft class="size-6"></ChevronLeft>
                </CtaButton>
                <CtaButton size="small" variant="secondary" class="size-11" @click="next">
                    <ChevronLeft class="size-6 rotate-180"></ChevronLeft>
                </CtaButton>
            </div>

        </div>
        <div class="location-carousel w-full overflow-hidden border border-resla-ebony-70">
            <div class="location-inner" ref="inner" :style="innerStyles">
                <LocationCard v-for="(location, index) in cards" :key="index" :location="location"></LocationCard>
            </div>
        </div>
    </div>


</template>

<script>
import ChevronLeft from '@/components/icons/ChevronLeft.vue'
import LocationCard from '@/components/base/LocationCard.vue'
import CtaButton from '@/components/base/CtaButton.vue';

export default {
    name:'LocationsSearch',
    components:{
        ChevronLeft,
        LocationCard,
        CtaButton
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