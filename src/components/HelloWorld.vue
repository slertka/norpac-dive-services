<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h2>
      Serving the Puget Sound Area
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

h2 {
  color: #FF8800;
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
