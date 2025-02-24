<script>

export default {
  name: "ContactView",
  data() {
      return { success: false };
  },
  created() {
      this.updateContentFromQuery();
  },
  watch: {
      "$route.query": {
      handler() {
          this.updateContentFromQuery();
      },
      deep: true
      }
  },
  methods: {
      updateContentFromQuery() {
          const query = this.$route.query;
          if (query.success == "true") this.success = true;
      }
  }
};
</script>

<template>
  <div v-if="success" class="success-container">
    <h3 class="success">
      Thank you for your email!
      <br />
      A member of our team will be with your shortly.
    </h3>
  </div>
  <div v-else class="contact">
    <h3>
      Thank you for considering Norpac Dive Services for your underwater needs. Please fill out the form below and we will contact your shortly.
      <br/>
      <br/>
      For all urgent requests, please call or text <u>(206) 596-1103</u>.
      <br/>
      <br/>
    </h3>
    <ContactMe />
  </div>
</template>

<style>
h3 {
  padding: 5px;
}

.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(var(--section-gap) / 8);
}

.success-container {
  margin: auto 1rem;
}

.success {
    background: var(--vt-c-pink);
    color: white;
    border: var(--vt-c-pink);
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    margin: 2rem auto;
}

@media (min-width: 768px) {
  .success {
    max-width: 500px;
  }
}

@media (min-width: 1024px) {
  h3 {
    padding: 0;
    font-size: 1.12rem;
  }

  .contact {
    min-height: 100vh;
    padding-right: 2rem;
  }
}
</style>
