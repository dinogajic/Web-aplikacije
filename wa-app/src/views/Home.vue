<template>
  <div id="home">
    <table>
      <tr>
        <th>SHA</th>
      </tr>
      <tr v-for="card in cards" :key="card.id">
        <td>
          <router-link :to="{ name: 'Details', parms }">{{
            card.Sha
          }}</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Detalji from "@/components/Detalji.vue";

export default {
  name: "Home",
  data: function () {
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
  components: {
    Detalji,
  },
};
</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
}
td {
  text-align: center;
  padding: 5px;
}
.button {
  background: none;
  border: none;
  padding: 5px;
}
.button:hover {
  color: red;
  cursor: pointer;
  background-color: aqua;
}
</style>