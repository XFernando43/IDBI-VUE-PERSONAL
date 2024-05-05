<template>

    <div class="m-3 p-2 flex flex-col gap-2 justify-center items-center">
        <InicidentTable />
        <Test/>
    </div>
        

</template>

<script lang="ts">
import IncidentsState from '../../components/Incidents/incidentsState.vue';
    export default{
        components:{
            IncidentsState,
        }
    }
</script>