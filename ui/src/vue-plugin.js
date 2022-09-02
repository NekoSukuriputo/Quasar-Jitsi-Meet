
import QJitsiMeet from './components/JitsiMeet.vue'
import QJitsiForm from './components/JitsiForm.vue'
import JitsiMeetDirective from './directives/JitsiMeet'
import JitsiFormDirective from './directives/JitsiForm'

const version = __UI_VERSION__

function install (app) {
  app.component('QJitsiMeet', QJitsiMeet)
  app.component('QJitsiForm', QJitsiForm)
  app.directive(JitsiMeetDirective.name, JitsiMeetDirective)
  app.directive(JitsiFormDirective.name, JitsiFormDirective)
}

export {
  version,
  QJitsiMeet,
  QJitsiForm,
  JitsiMeetDirective,
  JitsiFormDirective,
  install
}
