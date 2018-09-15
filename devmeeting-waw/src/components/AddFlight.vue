<template>
    <form @submit.prevent="onSubmit()">
        <div class="form-group">
            <label for="exampleInputEmail1">Imie</label>
            <input v-model="newFlight.imie" v-validate="'required|min:3'" class="form-control" id="exampleInputEmail1" name="flight">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Nazwisko</label>
            <input v-model="newFlight.nazwisko" class="form-control" id="exampleInputPassword1" name="flight">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Lot</label>
            <input v-model="newFlight.lot" class="form-control" id="exampleInputPassword2" name="flight">
        </div>
        <button>Add</button>

        <div v-show="errors.has('imie')">
            {{ errors.first('imie') }}
        </div>
    </form>
</template>

<script>
import uuid from 'uuid/v4';


export default {
  name: 'AddFlight',
  // 6/ newFlight goes to AddProduct component
  data() {
    return {
      newFlight: {
        imie: '',
        nazwisko: '',
        lot: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll()
        .then((result) => {
          if (!result) {
            return;
          }
          this.$emit('add-flight', {
            id: uuid(),
            ...this.newFlight,
          });
          this.newFlight.imie = '';
          this.newFlight.nazwisko = '';
          this.newFlight.lot = '';
          this.$validator.reset();
        });
    },
  },
};
</script>

<style scoped>

</style>
