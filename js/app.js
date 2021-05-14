const { createApp, onMounted, ref } = Vue

const app = createApp({
  setup() {

    const tl = gsap.timeline()

    let elements = ref([
      {
        el: 'p',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex dolore tempora quam possimus, earum fugit porro, delectus exercitationem magnam quas corporis, quidem vel velit laudantium harum ut amet! Deleniti!',
        animation: {}
      },
      {
        el: 'p',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex dolore tempora quam possimus, earum fugit porro, delectus exercitationem magnam quas corporis, quidem vel velit laudantium harum ut amet! Deleniti!',
        animation: {}
      },
    ])

    let gsapCode = ref('')
    let textIndex = ref(0)

    const animation = (obj) => {
      console.log(elements.value)
      // eval('var test=' + obj);
      // console.log(test)

      // obj = obj.replace('{', '')
      // obj = obj.replace('}', '')
      // let data = obj.split(',')
      // data = data.map(d => d.split(':'))
      // console.log(data)
      // obj = Object.fromEntries(data)

      // tl.from('.lorem', obj)
    }

    const currentItem = (index) => {
      textIndex.value = index
    }

    const showCode = () => {
      animation(gsapCode.value)
    }

    onMounted(() => {
      //animation()
    })

    return {
      gsapCode,
      elements,
      textIndex,
      showCode,
      currentItem
    }

  }
})

app.mount("#app")