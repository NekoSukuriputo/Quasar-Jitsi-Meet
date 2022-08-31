import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'QJitsiMeet',

  setup () {
    return () => h(QBadge, {
      class: 'QJitsiMeet',
      label: 'QJitsiMeet'
    })
  }
}
