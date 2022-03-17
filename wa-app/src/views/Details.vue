<template>
  <div class="details">
    <div>Ime: {{ Data.Name }}</div>
    <div>Email: {{ Data.Email }}</div>
    <div>Datum: {{ Data.Date }}</div>
    <div>Poruka: {{ Data.Message }}</div>
  </div>
</template>

<script>
export default {
  props: ["baseURL"],
  name: "Detalji",
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    this.sha = this.$route.params.sha;
  },
};
</script>

<style>
</style>