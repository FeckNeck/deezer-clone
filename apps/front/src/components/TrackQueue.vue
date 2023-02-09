<script lang="ts" setup>
import { usePlaylistsStore } from "../store/store";
import Track from "./Track.vue";

const { $state } = usePlaylistsStore();
</script>
<template>
    <h1>Queued tracks : {{ $state.trackQueue.size }}</h1>
    <Track v-for="track in $state.trackQueue" :key="track.id" :track="track" :mode="'trackQueue'" />
</template>
<style scoped>

</style>