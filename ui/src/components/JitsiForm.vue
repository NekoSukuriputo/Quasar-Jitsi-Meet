<script setup>
import {
  QForm,
  QBtn,
  QInput,
  QCard,
  QCardActions,
  QCardSection,
  QSeparator,
  QTab,
  QTabPanel,
  QTabs,
  QTabPanels
} from "quasar";
import { ref } from "vue";

let emit = defineEmits(["submit"]);

let roomName = ref("");
let email = ref("");
let displayName = ref("");
let showAdd = ref(1);

let tab = ref("make_room");

const showForm = (value) => {
  roomName.value = "";
  email.value = "";
  displayName.value = "";
  showAdd.value = value;
};

const onSubmit = () => {
  emit("submit", {
    displayName: displayName.value,
    email: email.value,
    roomName: roomName.value,
    isAddRoom: tab.value === "make_room",
  });
};
</script>
<template>
  <div>
    <div>
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="make_room" label="Make Room" />
          <q-tab name="join_room" label="Join Room" />
        </q-tabs>
        <q-separator />
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="make_room">
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input
                outlined
                v-model="roomName"
                label="Room Name"
                dense
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <q-input
                outlined
                v-model="email"
                label="Email"
                dense
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <q-input
                outlined
                v-model="displayName"
                label="Display Name"
                dense
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <div>
                <q-btn label="Submit" type="submit" color="primary" />
              </div>
            </q-form>
          </q-tab-panel>

          <q-tab-panel name="join_room">
            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input
                outlined
                v-model="roomName"
                label="Room Name"
                dense
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <div>
                <q-btn label="Submit" type="submit" color="primary" />
              </div>
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>