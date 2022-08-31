<template>
  <q-page padding>

    <QJitsiMeet ref="jitsiRef" domain="meet.jit.si" :options="jitsiOptions" />

  </q-page>
</template>
<script>
export default {
  computed: {
    jitsiOptions() {
      return {
        roomName: 'some-room-name',
        noSSL: false,
        userInfo: {
          email: 'user@email.com',
          displayName: '',
        },
        configOverwrite: {
          enableNoisyMicDetection: false
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false
        },
      };
    },
  },
}
</script>
<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
