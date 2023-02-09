<script lang="ts" setup>
import { useRoute } from "vue-router"
import { usePlaylist } from "../../hooks/index"
import Track from "./Track.vue";

const route = useRoute();
const { playlist, isLoading } = usePlaylist(+route.params.id);


</script>
<template>
    <RouterLink to="/" class="link">&#8592; Back to playlist</RouterLink>
    <p v-if="isLoading">Loading...</p>
    <Track v-else v-for="track in playlist.tracks.data" :key="track.id" :track="track" :mode="'trackList'"
        class="track" />
</template>
<style scoped>
.link {
    color: white;
    font-size: x-large;
    transition: color 300ms ease;
}

.link:hover {
    color: var(--teal);
}
</style>