<template>

    <div class="min-h-screen max-w-full flex justify-center items-center bg-slate-950">
        <Panel toggleable>
            <template #header>
                <div class="flex align-items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large"
                        shape="circle" />
                    <span class="font-bold">{{ incident.subject }}</span>
                </div>
            </template>
            <template #footer>
                <div class="flex flex-wrap align-items-center justify-content-between gap-3">
                    <div class="flex align-items-center gap-2">
                        <Button icon="pi pi-user" rounded text></Button>
                        <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
                    </div>
                    <span class="p-text-secondary">Updated 2 hours ago</span>
                </div>
            </template>
            <template #icons>
                <button class="p-panel-header-icon p-link mr-2" >
                    <span class="pi pi-cog"></span>
                </button>

            </template>
            <p class="m-0">
                <div class="flex flex-col gap-2">
                    <h1>{{ incident.subject }}</h1>
                    <img :src="incident.imageUrl" class=" max-w-lg">
                    {{ incident.details }}
                </div>
            </p>
        </Panel>
    </div>

</template>


<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useIncidentStore } from '../stores/incidentStore';

export default {
    computed: {
        ...mapState(useIncidentStore, ['incident']),
    },
    methods: {
        ...mapActions(useIncidentStore, ['fetchIncidetById'])
    },
    created() {
        this.fetchIncidetById();
    }

}
</script>