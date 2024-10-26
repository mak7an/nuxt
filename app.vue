<script lang="ts">
import { Component, Vue, Setup, toNative } from "vue-facing-decorator"

@Component({
  // async asyncData() {
  //   await new Promise((resolve) => {
  //     setTimeout(resolve, 10)
  //   })
  //   return { value: 42 }
  // },
})
class PlaygroundApp extends Vue {
  value!: number

  @Setup(() => definePageMeta({
    layout: 'admin',
  }))
  layout!: never

  inc() {
    this.value++
  }
}

export default toNative(PlaygroundApp)
</script>

<template>
</template>
