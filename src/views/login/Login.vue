<template>
  <login-container @on-login="onLogin"></login-container>
</template>

<script setup lang="ts">
import { ILoginContent } from "@/types"
import { useLoginStore } from "@/stores"

const onLogin = (props: ILoginContent) => {
  const login = useLoginStore()
  Object.assign(login.loginContent, props)
}
</script>

<style scoped>

</style>