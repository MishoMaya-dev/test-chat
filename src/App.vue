<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
}
</style>
<script>
  import MainLayout from "./layouts/MainLayout";

  export default {
    components: {MainLayout}
  }
</script>