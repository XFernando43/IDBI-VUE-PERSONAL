<template>
    <div
        class="min-h-screen max-w-full p-5 flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-center items-center gap-10 ">
        <div class=" max-w-screen-xl">
            <InicidentTable />
        </div>
        <div class="flex flex-row items-center justify-center ">
            <IncidentForm />
        </div>
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