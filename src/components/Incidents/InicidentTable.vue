<template>


        <DataTable :value="incidents" removableSort class=" max-w-screen-2xl" >
            <template #header>
                <div class="flex justify-end gap-3">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined  />
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="pi pi-search " />
                        </InputIcon>
                        <InputText placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>

          
            <Column field="proceso" header="Proceso" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.status }}
                </template>                    
            </Column>

            <Column field="estado" header="Estado" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.status }}
                </template>
                
            </Column>

            <Column field="tipo" header="Tipo" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.type }}
                </template>
                
            </Column>

            <Column field="incidente" header="Incidente" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.subject }}
                </template>
                
            </Column>

            <Column field="descripcion" header="Descripcion" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.details }}
                </template>
                
            </Column>

            <Column field="usuario" header="Usuario" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.user.name }}
                </template>
                
            </Column>

            <Column field="imagen" header="Imagen" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    <Image :src="data.imageUrl" preview ></Image>
                </template>
                
            </Column>

            <Column field="fecha" header="Fecha" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.createAt }}
                </template>
            </Column>


        </DataTable>


</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useIncidentStore } from '../../stores/incidentStore';

export default {
    data() {
        return {
            size: { label: 'Normal', value: 'null' },
            sizeOptions: [
                { label: 'Small', value: 'small' },
                { label: 'Normal', value: 'null' },
                { label: 'Large', value: 'large' }
            ]
        }
    },
    methods: {
        ...mapActions(useIncidentStore, ['fetchIncidents']),       
    },
    computed: {
        ...mapState(useIncidentStore, ["incidents"])
    },
    mounted() {
        this.fetchIncidents();
    }
}
</script>