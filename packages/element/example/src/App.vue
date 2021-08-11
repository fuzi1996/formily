<template>
  <div>
    <example />
  </div>
</template>

<script>
import Example from './components/example.vue'
export default {
  name: 'App',
  components: {
    Example,
  },
  data() {
    return {
      msg: 'msg',
    }
  },
}
</script>

<style lang="scss"></style>
