<template>
  <login-container @on-login="onLogin"></login-container>
</template>

<script setup lang="ts">
import { ILoginContent } from "@/types"
import { useLoginStore } from "@/stores"
import { useRouter } from 'vue-router'

const router = useRouter()

const onLogin = async (props: ILoginContent) => {
  const login = useLoginStore()
  Object.assign(login.loginContent, props)
  const { code, data } = await login.userLogin()
  const { token } = data
  localStorage.setItem('token', token as string)
  if (code === 200) {
    //
    router.push({ name: 'home' })
  }
}
</script>

<style scoped>

</style>