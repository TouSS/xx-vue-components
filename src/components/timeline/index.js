import Timeline from './src/timeline.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component(Timeline.name, Timeline)
  window.app = new Vue({
    el: '#app',
    data: {
      events: [
        {
          year: '2008',
          eventList: [
            {
              month: '二月',
              day: '13',
              eventList: [
                {
                  title: 'Philadelphia Museum School',
                  period: '10:00 - 11:00',
                  place: '第三试验场地',
                  event:
                    "Attends the Philadelphia Museum School of Industrial Art. Studies design with Alexey Brodovitch, art director at Harper's Bazaar, and works as his assistant."
                }
              ]
            },
            {
              month: '三月',
              day: '1',
              eventList: [
                {
                  title: 'Philadelphia Museum School',
                  period: '10:00 - 11:00',
                  place: '第三试验场地',
                  event:
                    "Attends the Philadelphia Museum School of Industrial Art. Studies design with Alexey Brodovitch, art director at Harper's Bazaar, and works as his assistant."
                },
                {
                  title: 'Philadelphia Museum School',
                  period: '16:00 - 18:00',
                  place: '第三试验场地',
                  event:
                    "Attends the Philadelphia Museum School of Industrial Art. Studies design with Alexey Brodovitch, art director at Harper's Bazaar, and works as his assistant."
                }
              ]
            }
          ]
        },
        {
          year: '2009',
          eventList: [
            {
              month: '二月',
              day: '1',
              eventList: [
                {
                  title: 'Philadelphia Museum School',
                  period: '10:00 - 11:00',
                  place: '第三试验场地',
                  event:
                    "Attends the Philadelphia Museum School of Industrial Art. Studies design with Alexey Brodovitch, art director at Harper's Bazaar, and works as his assistant."
                }
              ]
            },
            {
              month: '五月',
              day: '1',
              eventList: [
                {
                  title: 'Philadelphia Museum School',
                  period: '10:00 - 11:00',
                  place: '第三试验场地',
                  event:
                    "Attends the Philadelphia Museum School of Industrial Art. Studies design with Alexey Brodovitch, art director at Harper's Bazaar, and works as his assistant."
                }
              ]
            }
          ]
        }
      ]
    },
    methods: {
      onChoose(detail) {
        console.log(detail)
      }
    }
  })
}

export default Timeline
