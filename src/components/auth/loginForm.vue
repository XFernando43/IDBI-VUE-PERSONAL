<template>
    <Card class="max-w-lg select-none">
        <template #header>
            <img alt="user header" src="../../assets/329182497_580658887303089_6817430973110470755_n.jpg" class=" pointer-events-none" />
        </template>
        <template #title>IDBI Login</template>
        <template #subtitle>Ingrese su usuario</template>
        <template #content>
            <div class=" flex flex-col gap-4">

                <div class="flex flex-col gap-2">
                    <label for="username">Username</label>
                    <InputText id="username" aria-describedby="username" />
                </div>
                
                <div class="flex flex-col gap-2">
                    <label for="password">Password</label>
                    <InputText type="password" id="password" aria-describedby="password" />
                </div>

            </div>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Register" severity="secondary" outlined class="w-full" />
                <Button label="Login" class="w-full" />
            </div>
        </template>
    </Card>

</template>

<script lang="ts">
    export default{

    }
</script>
