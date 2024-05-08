<template>
    <div class="min-h-screen max-w-full flex justify-center items-center bg-slate-950">
        <IncidentPanel />
    </div>
</template>


<script lang="ts">

import IncidentPanel from '../components/Incidents/IncidentPanel.vue';

export default {
    components: {
        IncidentPanel
    }
}
</script>