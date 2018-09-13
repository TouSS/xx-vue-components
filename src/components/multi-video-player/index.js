import 'material-design-icons/iconfont/material-icons.css'
import MultiVideoPlayer from './src/multi-video-player.vue'

if (typeof window !== 'undefined' && window.Vue) {
  /* eslint-disable */
  Vue.component(MultiVideoPlayer.name, MultiVideoPlayer)
  new Vue({
    el: '#app',
    data: {
        parts: [
            "http://192.168.1.8:3000/videos/40d/d4d/40dd4dd8bedaad61216edb09f20e5641.mp4",
            "http://192.168.1.8:3000/videos/40d/d4d/40dd4dd8bedaad61216edb09f20e5641.mp4"
          ]
    }
  })
}

export default MultiVideoPlayer