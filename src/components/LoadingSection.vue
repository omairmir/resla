<template>
  <div class="loading" v-if="$store.state.loading">
    <div class="spinner-container">
      <!-- Spinner -->
      <div class="spinner-border text-primary highlighted" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white !important;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
}

.spinner-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
