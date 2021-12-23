<template>
  <div class="main">
    <Customer/>
  </div>
</template>

<script>
import Customer from "./components/Customer";

export default {
  name: 'App',
  components: {
    Customer,
  }
}
</script>

<style>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
