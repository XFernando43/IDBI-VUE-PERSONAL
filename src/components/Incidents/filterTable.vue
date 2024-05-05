<template>

    <div class="py-3 flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5">

            <FloatLabel>
                <label for="from">Desde</label>
                <Calendar id="from" v-model="buttondisplay1" showIcon :showOnFocus="false" />
            </FloatLabel>


            <FloatLabel>
                <label for="to">Hasta</label>
                <Calendar id="to" v-model="buttondisplay2" showIcon :showOnFocus="false" />
            </FloatLabel>


            <IconField iconPosition="left">
                <InputIcon class="pi pi-search"> </InputIcon>
                <Dropdown v-model="selectedCity" :options="status" optionLabel="name" placeholder="Select status"
                    class="w-full md:w-14rem" />
            </IconField>

            <Button label="Buscar" icon="pi pi-search" raised />


    </div>

</template>


<script lang="ts">
import { ref } from "vue";



export default {
    data() {
        return {
            buttondisplay1: ref(),
            buttondisplay2: ref(),
            value1: "",
            selectedCity: null,
            status: [
                { name: 'Open', code: '1' },
                { name: 'Process', code: '2' },
                { name: 'Close', code: '3' },
            ]
        }
    }
}

</script>