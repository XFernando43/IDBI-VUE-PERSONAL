<template>
    <div class="card rounded-md">
        <DataTable :value="incidents">
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
                <template #body="{ data }">
                    {{ data.subject }}
                    <!-- <Button @click="()=>{console.log(data)}">PIPI</Button> -->
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>

            <Column field="proceso" header="Proceso" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.status }}
                    <!-- <Button @click="()=>{console.log(data)}">PIPI</Button> -->
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>    
            </Column>

            <Column field="estado" header="Estado" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.status }}
                    <!-- <Button @click="()=>{console.log(data)}">PIPI</Button> -->
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>

            <Column field="tipo" header="Tipo" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.type }}
                    <!-- <Button @click="()=>{console.log(data)}">PIPI</Button> -->
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>

            <Column field="incidente" header="Incidente" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.details }}
                    <!-- <Button @click="()=>{console.log(data)}">PIPI</Button> -->
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>

            <Column field="descripcion" header="Descripcion" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.details }}
                    <!-- <Button @click="()=>{console.log(data)}">PIPI</Button> -->
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>

            <Column field="usuario" header="Usuario" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.user.name }}
                    <!-- <Button @click="()=>{console.log(data)}">PIPI</Button> -->
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>

            <Column field="imagen" header="Imagen" style="min-width: 12rem">
                <template #body="{ data }">

                    <Image :src="data.imageUrl"></Image>
                    <!-- <Button @click="()=>{console.log(data)}">PIPI</Button> -->
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>

            <Column field="fecha" header="Fecha" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.createAt }}
                    <!-- <Button @click="()=>{console.log(data)}">PIPI</Button> -->
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>


        </DataTable>
    </div>

</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useIncidentStore } from '../../stores/incidentStore';

export default {
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(useIncidentStore, ['fetchIncidents'])
    },
    computed: {
        ...mapState(useIncidentStore, ["incidents"])
    },
    mounted() {
        this.fetchIncidents();
    }
}
</script>