<template>
    <div
        class="min-h-screen max-w-full mx-8 grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-2 justify-center items-center">
        <IncidentForm />
        <InicidentTable />
    </div>


</template>

<script lang="ts">
import InicidentTable from '../components/Incidents/InicidentTable.vue';
import IncidentForm from '../components/users/IncidentForm.vue';


export default {
    data() {
    },
    components: {
        IncidentForm,
        InicidentTable
    }
}

</script>