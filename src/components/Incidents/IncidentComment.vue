<template>

    <Card class="w-auto p-5 mb-5">
        <template #header>
            <h1 class=" font-semibold text-lg">User: Fernando</h1>
        </template>

        <template #content>
            <p class="m-0">
                {{ commentProp.content }}
            </p>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button label="Cancel" severity="danger" outlined class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template>
    </Card>

</template>

<script lang="ts">
import { ICommentResponse } from '../../models/response/commentResponse';
export default {
    props: {
        commentProp: {
            type: Object as () => ICommentResponse,
            required: true
        }
    },
   
}

</script>