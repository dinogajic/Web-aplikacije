<template>
  <div>
    <div>Ime: {{ Data.Name }}</div>
    <div>Email: {{ Data.Email }}</div>
    <div>Datum: {{ Data.Date }}</div>
    <div>Poruka: {{ Data.Message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    Data: Object,
  },
  name: "Detalji",
  data() {
    return {
      cards: [],
    };
  },
};
</script>

<style scoped>
</style>