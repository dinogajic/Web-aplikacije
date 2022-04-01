<template>
  <div class="details">
    <table>
      <tr>
        <th>{{ Data.url }}</th>
      </tr>
      <tr>
        <strong>Naziv:</strong>
        {{
          Data.name
        }}
      </tr>
      <tr>
        <strong>Isbn:</strong>
        {{
          Data.isbn
        }}
      </tr>
      <tr>
        <strong>Autori:</strong>
        {{
          Data.authors
        }}
      </tr>
      <tr>
        <strong>Broj stranica:</strong>
        {{
          Data.numberOfPages
        }}
      </tr>
      <tr>
        <strong>Broj likova:</strong>
        {{
          Data.characters.length
        }}
      </tr>
      <tr>
        <strong>Broj likova:</strong>
        {{
          Data.country
        }}
      </tr>
      <tr>
        <strong>Izdavač:</strong>
        {{
          Data.publisher
        }}
      </tr>
      <tr>
        <strong>Zemlja:</strong>
        {{
          Data.country
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
  props: ["knjiga"],
  mounted() {
    this.url = this.$route.params.url;
    this.Data = this.knjiga.find((Data) => Data.url == this.url);
  },
};
</script>

<style>
</style>