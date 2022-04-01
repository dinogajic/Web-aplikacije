<template>
  <div id="home">
    <table>
      <tr>
        <th></th>
      </tr>
      <tr v-for="knji in knjiga" :key="knji.id">
        <td>{{ knji.name }}</td>
        <td>{{ knji.authors[0] }}</td>
        <td>{{ knji.released }}</td>
        <td>
          <router-link
            class="button"
            :to="{ name: 'Details', params: { url: knji.url } }"
            >{{ knji.url }}
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["knjiga"],
  data: function () {
    return {};
  },
};
</script>

<style>
</style>