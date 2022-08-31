
import JitsiMeet from './components/JitsiMeet.vue'
import Directive from './directives/Directive'

const version = __UI_VERSION__

function install (app) {
  app.component('QJitsiMeet', JitsiMeet)
  app.directive(Directive.name, Directive)
}

export {
  version,
  JitsiMeet,
  Directive,
  install
}
