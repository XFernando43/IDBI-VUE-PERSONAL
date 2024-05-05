<template>

    <div class="m-3 p-2">
        <InicidentTable />
        <Test/>
    </div>
        

</template>

<script lang="ts">
import InicidentTable from '../../components/Incidents/InicidentTable.vue';
import Test from '../../components/test.vue';
    export default{
        components:{
            InicidentTable,
            Test
        }
    }
</script>