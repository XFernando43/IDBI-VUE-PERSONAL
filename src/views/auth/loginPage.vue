<template>

  <div class="min-h-screen max-w-full flex justify-center items-center bg-slate-950">
    <LoginForm />
  </div>


</template>

<script lang="ts">
import LoginForm from '../../components/auth/loginForm.vue';


export default {
  components: {
    LoginForm,
  }
}
</script>