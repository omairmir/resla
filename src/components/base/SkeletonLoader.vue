<template>
  <div class="skeleton-loader overflow-hidden relative" :class="loaderClass" :style="loaderStyle">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'rect', // Default to rectangle type
      validator(value) {
        return ["rect", "circle"].includes(value);  // more animation can be added
      },
    },
    size: {
      type: [Number, String], // Use for both width and height if set
    },
    animation: {
      type: String,
      default: 'wave',
      validator(value) {
        return ["wave", "fade"].includes(value);  // more animation's can be added
      },
    },
    height: {
      type: [Number, String],
      default: 100
    },
    width: {
      type: [Number, String],
      default: 100
    },
    color: {
      type: String,
      default: '#E5E3E0', // default color
    },
    fadeColor: {
      type: String,
      default: '#EDECEB', // secondary color for pulse animation
    },
    waveColor: {
      type: String, // custom color for wave animation
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: [Number, String],
      default: 8,
    }
  },
  computed: {
    loaderStyle() {
      return {
        width: this.width ? (typeof this.width === 'number' ? `${this.width}px` : this.width) : (typeof this.size === 'number' ? `${this.size}px` : this.size),
        height: this.height ? (typeof this.height === 'number' ? `${this.height}px` : this.height) : (typeof this.size === 'number' ? `${this.size}px` : this.size),
        'background-color': this.color,
        'border-radius': this.rounded ? (this.type === 'circle' ? '50%' : (typeof this.radius === 'number' ? `${this.radius}px` : this.radius)) : 0,
      };
    },
    loaderClass() {
      return `animation--${this.animation} `;
    },
  },
  mounted() {
    if (this.waveColor) {
      this.$el.style.setProperty('--wave-color', this.waveColor);
    }
    if (this.fadeColor) {
      this.$el.style.setProperty('--pulse-color', this.fadeColor);
    }
    if (this.color) {
      this.$el.style.setProperty('--color', this.color);
    }
  }
};
</script>

<style lang="scss" scoped>
.skeleton-loader {
  --wave-color: rgba(255, 255, 255, 0.5);
  --fade-color: #EDECEB;
  --color: #E5E3E0;
}


@keyframes fade {

  0%,
  100% {
    background-color: var(--color);
    ;
    /* initial color */
  }

  50% {
    background-color: var(--fade-color);
    /* pulsing to second color */
  }
}

@keyframes wave {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

// Animation classes
.animation--wave {
  position: relative;
}


.animation--wave::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: linear-gradient(90deg, transparent, var(--wave-color), transparent);
  animation: wave 1.5s linear .5s infinite;
}

.animation--fade {
  animation: fade 2s ease-in-out infinite;
}
</style>
