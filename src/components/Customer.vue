<template>
  <div class="customer">
    <h1>I'm a customer</h1>
    <p>I see {{ totalBookCount }} Books!</p>
    <p v-show="happyStaff">The staff seems happy!</p>
    <p v-show="!totalBookCount">I can't buy any...</p>
    <button :disabled="!totalBookCount" @click="buyBook">
      Buy Books
    </button>
    <button :disabled="totalBookCount < 2" @click="buyTwoBooks">
      Buy Two Book
    </button>
  </div>
</template>
<script>
export default {
  name: 'Customer',
  computed: {
    totalBookCount() {
      return this.$store.state.totalBookCount
    },
    happyStaff() {
      return this.$store.getters.happyStaff
    }
  },
  methods: {
    buyBook() {
      // dispatch the action to buy a Book
      this.$store.dispatch('removeBook', 1);
    },
    buyTwoBooks() {
      this.$store.dispatch('removeBook', 2)
    }
  }
}
</script>
<style>
</style>