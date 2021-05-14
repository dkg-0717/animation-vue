const { createApp, onMounted, ref } = Vue

const app = createApp({
  setup() {

    const tl = gsap.timeline()

    let gsapCode = ref('{autoAlpha:0,duration:0.7,scale:0}')

    const animation = (obj) => {

      eval('var test=' + obj);
      console.log(test)


      obj = obj.replace('{', '')
      obj = obj.replace('}', '')
      let data = obj.split(',')
      data = data.map(d => d.split(':'))
      console.log(data)
      obj = Object.fromEntries(data)

      tl.from('.lorem', obj)
    }

    const showCode = () => {
      animation(gsapCode.value)
    }

    onMounted(() => {
      //animation()
    })

    return {
      gsapCode,
      showCode
    }

  }
})

app.mount("#app")