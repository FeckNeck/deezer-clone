<script lang="ts" setup>
import { usePlaylists } from "../../hooks/index"

const { playlists, isLoading } = usePlaylists();
</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-else>Playlists :</h1>
    <div v-for="playlist in playlists.data" class="playlists-item" :key="playlist.id">
        <RouterLink :to="`/playlist/${playlist.id}`" class="playlists-link">
            <img :src="playlist.picture_small" :alt="playlist.title + ' cover'" />
            <p>{{ playlist.title }}</p>
        </RouterLink>
    </div>
</template>

<style scoped>
.playlists-item {
    border-radius: 0.5rem;
    border: 1px solid var(--ternary-dark);
    color: white;
    padding: 1rem;
    transition: all 300ms ease;
}

.playlists-item:hover {
    box-shadow: var(--shadow);
    color: var(--teal);
    cursor: pointer;
    transform: translateY(-0.25rem) translateX(0.25rem);
}

.playlists-link {
    align-items: center;
    color: inherit;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    text-decoration: none;
}
</style>