import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-jitsi-meet'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
