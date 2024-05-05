<template>

    <div class="m-3 p-2 flex flex-col gap-2 justify-center items-center">
        <IncidentsState/>
        <FilterTable/>
        <InicidentTable />
        <Test/>
    </div>
        

</template>

<script lang="ts">
import InicidentTable from '../../components/Incidents/InicidentTable.vue';
import FilterTable from '../../components/Incidents/filterTable.vue';
import IncidentsState from '../../components/Incidents/incidentsState.vue';
    export default{
        components:{
            InicidentTable,
            FilterTable,
            IncidentsState,
        }
    }
</script>