<template>
    <div id="app">

        <div class="container">
            <h2>Bordered Table</h2>
            <p>The .table-bordered class adds borders to a table:</p>

            <flight-list :flights="flights"></flight-list>
            <add-flight @add-flight="onAddFlight"></add-flight>

            <p v-if="!flights.length">No products!</p>


            <button v-on:click="removeLast()">Remove last item</button>
            <button v-on:click="addPutinFlight()">Add Putin</button>

        </div>
    </div>
</template>

<script>

import FlightList from './components/FlightList';
import AddFlight from './components/AddFlight';


export default {
  name: 'app',
  components: {
    FlightList,
    AddFlight,
  },
  data() {
    return {
      inputName: '',
      inputSurname: '',
      inputFlight: '',
      flights:
          [{
            imie: 'Karol',
            nazwisko: 'Arek',
            lot: 'WAW-FRA',
          }, {
            imie: 'Marta',
            nazwisko: 'Łata',
            lot: 'WAW-NRT',
          }, {
            imie: 'Lech',
            nazwisko: 'Wałęsa',
            lot: 'WAW-GDA',
          }],
    };
  },
  methods: {
    removeLast() {
      this.flights.pop();
    },
    addPutinFlight() {
      this.flights.push({
        imie: 'Władimir',
        nazwisko: 'Putin',
        lot: 'WAW-SVO',
      });
    },
    onAddFlight(flight) {
      this.flights.push(flight);
    },
  },
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
