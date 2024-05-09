<template>

    <Card class="mb-3 overflow-hidden p-5">
        
        <template #title>Post Comment</template>
        <template #subtitle>Actualiza el estado del incidente mediante comentarios</template>
        <template #content>
            <Textarea rows="5" cols="30" />

        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <!-- <Button label="Post" severity="secondary" outlined class="w-full" /> -->
                <Button label="Post" class="w-full" />
            </div>
        </template>
    </Card>

</template>

<script lang="ts">

export default {

}


</script>