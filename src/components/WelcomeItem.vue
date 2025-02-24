<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h2>
        <slot name="heading"></slot>
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  padding: 0 calc(var(--section-gap) / 5) 0 calc(var(--section-gap) / 5);
}

.item:last-of-type {
  padding: 0 calc(var(--section-gap) / 5) calc(var(--section-gap) / 5) calc(var(--section-gap) / 5);
}

.details {
  flex: 1;
  margin-left: 1rem;
  font-size: 1.1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  padding-top: 25px;
  width: 50px;
  height: 50px;
  color: var(--color-text);
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--vt-c-pink);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0 calc(var(--icon-size) /4) 0 calc(var(--icon-size));
    margin: var(--section-v-gap) 0 var(--section-v-gap) 0;
    min-height: calc(var(--icon-size));
  }

  .item:first-of-type {
    padding-top: 0;
  }

  .item:last-of-type {
    padding: 0 calc(var(--icon-size) /4) 0 calc(var(--icon-size));
  }

  i {
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: var(--icon-size);
    height: var(--icon-size);
    padding: 5px;
  }
}
</style>
