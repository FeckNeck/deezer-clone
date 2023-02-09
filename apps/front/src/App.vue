<script setup lang="ts">
import { useQueryProvider } from 'vue-query'
import Player from './components/Player.vue';
import TrackQueue from './components/TrackQueue.vue';

useQueryProvider();
</script>

<template>
    <div class="container">
        <main>
            <div class="playlists">
                <RouterView />
            </div>
        </main>
        <aside>
            <div class="playlists">
                <TrackQueue />
            </div>
        </aside>
        <footer>
            <Player />
        </footer>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-areas: 'main aside' 'footer footer';
    grid-template-columns: 1fr 25rem;
    grid-template-rows: 1fr 6rem;
    height: 100%;
    background-color: var(--primary-dark);
}

main {
    grid-area: main;
    overflow-y: auto;
    padding: 1rem;
}

.playlists {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

aside {
    overflow-y: auto;
    border-left: 2px solid var(--ternary-dark);
    grid-area: aside;
    padding: 1rem;
}

footer {
    border-top: 2px solid var(--ternary-dark);
    grid-area: footer;
}
</style>
