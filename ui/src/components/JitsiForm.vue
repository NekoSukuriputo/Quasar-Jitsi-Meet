<script setup>
import { QForm, QBtn, QInput, QCard, QCardActions, QCardSection, QSeparator } from 'quasar'
import { ref } from 'vue'

let emit = defineEmits(['submit'])

let roomName = ref('')
let email = ref('')
let displayName = ref('')
let showAdd = ref(1)

const showForm = (value) => {
  roomName.value = ''
  email.value = ''
  displayName.value = ''
  showAdd.value = value
}

const onSubmit = () => {
  emit('submit', {
    displayName,
    email,
    roomName,
    isAddRoom: showAdd.value === 1
  })
}
</script>
<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card>
        <q-card-section>
          <div class="q-mt-md" v-if="showAdd === 1">
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input outlined v-model="roomName" label="Room Name" dense
                :rules="[val => val && val.length > 0 || 'Please type something']" />
              <q-input outlined v-model="email" label="Email" dense
                :rules="[val => val && val.length > 0 || 'Please type something']" />
              <q-input outlined v-model="displayName" label="Display Name" dense
                :rules="[val => val && val.length > 0 || 'Please type something']" />
              <div>
                <q-btn label="Submit" type="submit" color="primary" />
              </div>
            </q-form>
          </div>
          <div class="q-mt-md" v-if="showAdd === 2">
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input outlined v-model="roomName" label="Room Name" dense
                :rules="[val => val && val.length > 0 || 'Please type something']" />
              <div>
                <q-btn label="Submit" type="submit" color="primary" />
              </div>
            </q-form>
          </div>
        </q-card-section>
        <q-separator dark />

        <q-card-actions>
          <q-btn flat label="Make Room" icon="add" @click="showForm(1)" />
          <q-btn flat label="Join Room" icon="people" @click="showForm(2)" />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>