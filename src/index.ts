import { version } from '../package.json'

import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from './components/container/'
import { ElCol, ElRow } from './components/layout'
import '/theme/src/icon.scss'

const components = [
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElRow,
  ElCol,
]
function install(app) {
  components.forEach((component) => {
    app.use(component)
  })
}

const element3 = {
  version,
  install,
}

export { ElContainer, ElHeader, ElAside, ElMain, ElFooter, ElRow, ElCol }
export default element3
