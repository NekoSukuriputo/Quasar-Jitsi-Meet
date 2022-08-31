<template>
   <div>
    <div class="row q-col-gutter-x-sm">
      <div class="col">
        <q-btn
          align="around"
          class="btn-fixed-width"
          color="primary"
          label="Make Room"
          icon="add"
          @click="showForm(1)"
        />
      </div>
      <div class="col">
        <q-btn
          align="around"
          class="btn-fixed-width"
          color="secondary"
          label="Join Room"
          icon="people"
          @click="showForm(2)"
        />
      </div>
    </div>

    <div class="q-mt-md" v-if="showAdd">
      <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input outlined v-model="roomName" label="Room Name" dense
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
      <q-input outlined v-model="email" label="Email" dense
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
      <q-input outlined v-model="displayName" label="Display Name" dense
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>
    </div>
    <div class="q-mt-md" v-if="showJoin">
      <q-form
      @submit="onSubmitJoin"
      class="q-gutter-md"
    >
      <q-input outlined v-model="roomName" label="Room Name" dense
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>