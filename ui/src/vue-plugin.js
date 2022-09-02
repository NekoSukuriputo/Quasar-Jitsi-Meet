
import JitsiMeet from './components/JitsiMeet.vue'
import JitsiForm from './components/JitsiForm.vue'
import JitsiMeetDirective from './directives/JitsiMeet'
import JitsiFormDirective from './directives/JitsiForm'

const version = __UI_VERSION__

function install (app) {
  app.component('QJitsiMeet', JitsiMeet)
  app.component('QJitsiForm', JitsiForm)
  app.directive(JitsiMeetDirective.name, JitsiMeetDirective)
  app.directive(JitsiFormDirective.name, JitsiFormDirective)
}

export {
  version,
  JitsiMeet,
  JitsiForm,
  JitsiMeetDirective,
  JitsiFormDirective,
  install
}
