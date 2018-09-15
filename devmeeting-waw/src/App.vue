<template>
    <div id="app">

        <div class="container">
            <h2>Bordered Table</h2>
            <p>The .table-bordered class adds borders to a table:</p>
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
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Imie</label>
                    <input v-model="inputName" v-validate="'required|min:3'" class="form-control" id="exampleInputEmail1" name="imie">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Nazwisko</label>
                    <input v-model="inputSurname" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Lot</label>
                    <input v-model="inputFlight" class="form-control" id="exampleInputPassword2">
                </div>
                <button @click="addFromInput(inputName, inputSurname, inputFlight)" type="button"
                        class="btn btn-primary">Submit
                </button>

                <div v-show="errors.has('imie')">
                    {{ errors.first('imie') }}
                </div>
            </form>


            <!-- 5. v-if can be helpful with conditional statements -->
            <p v-if="!flights.length">No products!</p>
            <!-- 6. v-on adds an handler and :click is the name of the event, then goes the function to invoke -->

            <button v-on:click="removeLast()">Remove last item</button>
            <button v-on:click="addPutinFlight()">Add Putin</button>

        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
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
    removeFlight(key) {
      this.flights.splice(key, 1);
    },
    addFromInput(inputName, inputSurname, inputFlight) {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        this.flights.push({
          imie: inputName,
          nazwisko: inputSurname,
          lot: inputFlight,
        });
        this.newProduct.imie = '';
        // 4/ and reset validation state after adding a product
        this.$validator.reset();
      });
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
