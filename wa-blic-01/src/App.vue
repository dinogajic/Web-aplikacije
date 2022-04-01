<template>
  <div id="app">
    <router-view v-if="knjiga" :knjiga="knjiga"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      knjiga: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("https://www.anapioficeandfire.com/api/books")
        .then((response) => {
          response.data.forEach((books) => {
            this.knjiga.push({
              url: books.url,
              name: books.name,
              isbn: books.isbn,
              authors: books.authors,
              numberOfPages: books.numberOfPages,
              publisher: books.publisher,
              country: books.country,
              released: books.released,
              characters: books.characters,
            });
          });
        });
    },
  },
};
</script>

<style>
</style>
