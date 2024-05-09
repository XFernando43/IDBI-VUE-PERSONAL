<template>
    <div class="min-h-screen max-w-full flex flex-row gap-20 justify-center items-center bg-slate-950">
        <div class=" w-[700px] bg-slate-700 p-4 overflow-y-auto max-h-[650px] rounded-md shadow-2xl">
            <CommentsList /> 
        </div>
        <div>
            <IncidentPanel />
        </div>
    </div>
</template>


<script lang="ts">
import IncidentPanel from '../../components/Incidents/IncidentPanel.vue';
import CommentsList from '../../components/Incidents/commentsList.vue';



export default {
    components: {
        IncidentPanel,
        CommentsList,   
    }
}
</script>