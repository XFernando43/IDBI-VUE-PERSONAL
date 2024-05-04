<template>
     <div class="login-form">
    <h2>Iniciar sesión</h2>
    <div class="p-fluid">
      <div class="p-field">
        <label for="username">Nombre de usuario</label>
        <InputText id="username" />
      </div>
      <div class="p-field">
        <label for="password">Contraseña</label>
        <Password  toggleMask />
      </div>
      <Button label="Iniciar sesión" class="p-button-primary"/>
    </div>
  </div>
</template>

<script lang="ts">
    export default{
        
    }
</script>