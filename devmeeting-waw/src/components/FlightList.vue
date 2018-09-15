<template>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Flight</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(p, key) in flights">
            <td>{{p.imie}}</td>
            <td>{{p.nazwisko}}</td>
            <td>{{p.lot}}</td>
            <td>
                <button v-on:click="removeFlight(key)">Remove</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: 'FlightList',
  props: {
    flights: {
      type: Array,
    },
  },
  methods: {
    removeFlight(key) {
      this.flights.splice(key, 1);
    },
  },
};
</script>

<style scoped>

</style>
