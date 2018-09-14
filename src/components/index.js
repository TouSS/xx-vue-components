//import 'material-design-icons/iconfont/material-icons.css'

import FileViewer from './file-viewer/src/file-viewer.vue'
import PublishStateDialog from './publish-state-dialog/src/publish-state-dialog.vue'
import Md5CheckDialog from './md5-check-dialog/src/md5-check-dialog.vue'
import TextEffect from './text-effect/src/text-effect.vue'
import PhotoWall from './photo-wall/src/photo-wall.vue'
import PhotoWall2 from './photo-wall2/src/photo-wall2.vue'
import PhotoWrap1 from './photo-wrap-1/src/photo-wrap-1.vue'
import MultiVideoPlayer from './multi-video-player/src/multi-video-player.vue'

const components = [FileViewer, PublishStateDialog, Md5CheckDialog, TextEffect, PhotoWall, PhotoWall2, PhotoWrap1, MultiVideoPlayer]

let isWeb = typeof window !== 'undefined' && window.Vue

let _info = []

components.forEach(component => {
  _info.push({ name: component.name, label: component.label })
  if (isWeb) {
    /* eslint-disable */
    Vue.component(component.name, component)
  }
})

export { _info, PublishStateDialog, Md5CheckDialog, TextEffect, PhotoWall, PhotoWall2, PhotoWrap1, MultiVideoPlayer }
