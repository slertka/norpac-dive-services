<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <h2>
      Serving the Puget Sound Region
    </h2>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
h1 {
  font-weight: 600;
  position: relative;
  top: -10px;
}

.greetings h1,
.greetings h2 {
  text-align: center;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.7rem;
  }
  
  .greetings h1,
  .greetings h2 {
    text-align: center;
  }
}
</style>
