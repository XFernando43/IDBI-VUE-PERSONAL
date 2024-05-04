<template>
    <div class="card rounded-md">
        <DataTable>
            <template #header>
                <div class="flex justify-content-end">
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>

            <Column field="name" header="Name" style="min-width: 12rem">
                <!-- <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template> -->
            </Column>

            <Column field="proceso" header="Proceso" style="min-width: 12rem">
            </Column>

            <Column field="estado" header="Estado" style="min-width: 12rem">
            </Column>

            <Column field="tipo" header="Tipo" style="min-width: 12rem">
            </Column>

            <Column field="incidente" header="Incidente" style="min-width: 12rem">
            </Column>

            <Column field="descripcion" header="Descripcion" style="min-width: 12rem">
            </Column>

            <Column field="usuario" header="Usuario" style="min-width: 12rem">
            </Column>

            <Column field="imagen" header="Imagen" style="min-width: 12rem">
            </Column>

            <Column field="fecha" header="Fecha" style="min-width: 12rem">
            </Column>
            
            
        </DataTable>
    </div>
</template>

<script lang="ts">
    export default{

    }
</script>