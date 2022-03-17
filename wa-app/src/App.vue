<template>
  <div id="app">
    <router-view v-if="cards" :cards="cards"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("https://api.github.com/repos/vuejs/vue/commits")
        .then((response) => {
          response.data.forEach((commits) => {
            this.cards.push({
              Sha: commits.sha,
              Name: commits.commit.author.name,
              Email: commits.commit.author.email,
              Message: commits.commit.message,
              Date: commits.commit.author.date,
            });
          });
        });
    },
  },
};
</script>

<style>
</style>
