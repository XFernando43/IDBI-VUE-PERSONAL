<template>

    <div class=" p-2 flex flex-col gap-2 justify-center items-center bg-slate-950">
        <div class=" max-w-screen-2xl">
            <InicidentTable />
        </div>
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