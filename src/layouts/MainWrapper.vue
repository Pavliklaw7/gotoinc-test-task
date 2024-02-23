<template>
  <main class="w-100 mw-[500px] main-wrapper">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  border: none;
  border-radius: 5%;
  background-color: var(--bs-body-bg);
}
</style>
