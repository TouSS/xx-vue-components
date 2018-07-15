import FileViewer from './file-viewer/src/file-viewer.vue'

const components = [FileViewer]

let isWeb = typeof window !== 'undefined' && window.Vue

let _info = []

components.forEach(component => {
  _info.push({ name: component.name, label: component.label })
  if (isWeb) {
    /* eslint-disable */
    Vue.component(component.name, component)
  }
})

export { _info, FileViewer }
