<template>
  <div class="details">
    <table>
      <tr>
        <th>{{ Data.Sha }}</th>
      </tr>
      <tr>
        <strong>Ime:</strong>
        {{
          Data.Name
        }}
      </tr>
      <tr>
        <strong>Email:</strong>
        {{
          Data.Email
        }}
      </tr>
      <tr>
        <strong>Datum:</strong>
        {{
          Data.Date
        }}
      </tr>
      <tr>
        <strong>Poruka:</strong>
        {{
          Data.Message
        }}
      </tr>
    </table>
    <router-link class="button" to="/">BACK</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Data: {},
    };
  },
  props: ["cards"],
  mounted() {
    this.sha = this.$route.params.sha;
    this.Data = this.cards.find((Data) => Data.Sha == this.sha);
  },
};
</script>

<style>
.button {
  background: none;
  border: none;
  padding: 5px;
}
.button:hover {
  color: red;
  cursor: pointer;
}
</style>