<template>
    <div>
        <CreateComment/>
        <div v-if="comments.length > 0">
            <div v-for="comment in comments" :key="comment.commentId">
                <IncidentComment :commentProp="comment" />
            </div>
        </div>
        <div v-else>
            <p>No hay comentarios actualmente.</p>
        </div>
    </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useCommentStore } from '../../stores/commentStore';
import IncidentComment from './IncidentComment.vue';
import CreateComment from './createComment.vue';


export default {
    computed: {
        ...mapState(useCommentStore, ['comments'])
    },
    methods: {
        ...mapActions(useCommentStore, ['fetchComments'])
    },
    mounted() {
        // const id = this.$route.params.id;
        const id = this.$route.params.id;
        console.log(id);
        console.log(typeof (id));
        this.fetchComments(id.toString());
    },
    components: {
        IncidentComment,
        CreateComment,
    }

}

</script>