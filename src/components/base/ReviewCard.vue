<template>
    <div :class="`flex flex-col gap-2 py-3 px-6 border-primary-700 ${border ? 'border-l' : ''}`" >
        <div :class="`flex ${isVertical ? 'flex-col' : 'flex-row'}`" :style="{ gap: starSpacing }">
            <!-- loop through 5 stars one path is for outline and one for fill -->
            <svg v-for="n in 5" :key="n" :width="starWidth" :height="starHeight"  fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 1.66669L12.5 6.66669L17.5 7.50002L13.75 11.25L15 16.6667L10 14.1667L5 16.6667L6.25 11.25L2.5 7.50002L7.5 6.66669L10 1.66669Z"
                    :fill="n <= rating ? filledColor : unfilledColor" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10 0.916687C10.2841 0.916687 10.5438 1.07719 10.6708 1.33128L13 5.98968L17.6233 6.76022C17.9004 6.80641 18.1285 7.0036 18.2142 7.27114C18.3 7.53868 18.229 7.8317 18.0303 8.03035L14.5743 11.4864L15.7308 16.498C15.7961 16.781 15.6922 17.0763 15.464 17.256C15.2358 17.4356 14.9244 17.4674 14.6646 17.3375L10 15.0052L5.33543 17.3375C5.07566 17.4674 4.76425 17.4356 4.53606 17.256C4.30787 17.0763 4.20392 16.781 4.26923 16.498L5.42576 11.4864L1.96969 8.03035C1.77103 7.8317 1.70006 7.53868 1.7858 7.27114C1.87153 7.0036 2.0996 6.80641 2.37672 6.76022L7 5.98968L9.3292 1.33128C9.45625 1.07719 9.71595 0.916687 10 0.916687ZM10 3.34374L8.17084 7.0021C8.06353 7.21672 7.86001 7.36703 7.62332 7.40648L4.06088 8.00022L6.78035 10.7197C6.9632 10.9025 7.03896 11.1667 6.98081 11.4187L6.08887 15.2837L9.66461 13.4959C9.87576 13.3903 10.1243 13.3903 10.3354 13.4959L13.9112 15.2837L13.0192 11.4187C12.9611 11.1667 13.0368 10.9025 13.2197 10.7197L15.9392 8.00022L12.3767 7.40648C12.14 7.36703 11.9365 7.21672 11.8292 7.0021L10 3.34374Z"
                    :fill="n <= rating ? filledColor : outlineColor" />
            </svg>
        </div>
        <p class="text-sm text-resla-ebony-1000">
            {{ reviewText }}
        </p>
        <p class="text-base font-medium text-resla-ebony-1000">
            {{ customerName }}
        </p>
    </div>
</template>

<script>
export default {
    name: "ReviewCard",
    props: {
        customerName: {
            type: String,
            default: "Moe B.",
        },
        reviewText: {
            type: String,
            default:
                "Everyone we talked to at Resla was extremely helpful, professional, and attentive. We’d definitely rent from Resla again.",
        },
        rating: {
            type: Number,
            default: 4,
        },
        border: {
            type: Boolean,
            default: true
        },
        isVertical: {
            type: Boolean,
            default: false,
        },
        starWidth: {
            type: String,
            default: "24px",
        },
        starHeight: {
            type: String,
            default: "24px",
        },
        filledColor: {
            type: String,
            default: "#EDC055", 
        },
        unfilledColor: {
            type: String,
        },
        outlineColor: {
            type: String,
            default: "#54504C", 
        },
        starSpacing: {
            type: String,
            default: "4px",
        },
    },
};
</script>
