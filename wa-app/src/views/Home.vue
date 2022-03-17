<template>
  <div id="home">
    <table>
      <tr>
        <th>SHA</th>
      </tr>
      <tr v-for="card in cards" :key="card.id">
        <td>
          <router-link
            class="button"
            :to="{ name: 'Details', params: { sha: card.Sha } }"
            >{{ card.Sha }}</router-link
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["cards"],
  data: function () {
    return {};
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
}
</style>