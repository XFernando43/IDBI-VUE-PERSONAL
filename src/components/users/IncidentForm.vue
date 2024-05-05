<template>
    <Card class="max-w-lg select-none">
        <template #header>
            <h1 class="text-center">Crear Nuevo Incidente</h1>
        </template>
        <template #title>Registra un nuevo incidente</template>
        <template #subtitle>De ese modo lo solucionaremos de manera inmediata</template>
        
        <template #content>
            <div class=" flex flex-col gap-4">

                <div class="flex flex-col gap-2">
                    <label for="subject">Asunto</label>
                    <InputText id="subject" aria-describedby="asunto" />
                </div>
                
                <div class="flex flex-col gap-2">
                    <label for="password">Password</label>
                    <Dropdown v-model="selectedCity" :options="status" optionLabel="name" placeholder="Select status"
                    class="w-full md:w-14rem" />
                </div>

                <div class="flex flex-col gap-2">
                    <label for="description">Description</label>
                    <Textarea id="description" v-model="description" class=" w-auto" />
                </div>

                <div class="flex flex-col gap-2">
                    <label for="password">Evidence</label>
                    <!-- <InputText type="file" id="password" aria-describedby="password" /> -->
                    <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" />    
                </div>

            </div>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Cancel" severity="danger" outlined class="w-full" />
                <Button label="Submit" class="w-full" />
            </div>
        </template>
    </Card>
</template>

<script lang="ts">
export default{
    data(){
        return{
            selectedCity: null,
            status: [
                { name: 'Room', code: '1' },
                { name: 'Service', code: '2' },
                { name: 'Atention', code: '3' },
            ],
            description:""
        }
    }
}
</script>