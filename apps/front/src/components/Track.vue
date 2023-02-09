<script lang="ts" setup>
import { usePlaylistsStore } from '../store/store';

const store = usePlaylistsStore();

defineProps({
    track: {
        type: Object,
        required: true
    },
    mode: {
        type: String,
        required: true
    }
})

function play(track: any) {
    store.playTrack(track)
    store.removeFromQueue(track)
}

</script>
<template>
    <div class="track">
        <div class="track-info">
            <img :src="track.album.cover_small" :alt="track.title + ' cover'" />
            <div>
                <h3>{{ track.title }}</h3>
                <p>{{ track.artist.name }}</p>
            </div>
        </div>
        <div class="track-interactions">
            <button v-if="mode === 'trackList'" @click="store.addToQueue(track)"
                :disabled="store.trackQueue.has(track)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
            </button>
            <button v-else-if="mode === 'trackQueue'" @click="store.removeFromQueue(track)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
            </button>
            <button @click="play(track)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
            </button>

        </div>
    </div>
</template>
<style scoped>
.track {
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid var(--ternary-dark);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
}

.track-info {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 2rem;
}


.track-interactions {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

button {
    background: none;
    border: none;
    color: white;
    transition: color 300ms ease;
}

button:hover {
    color: var(--teal);
    cursor: pointer;
}

button:disabled {
    color: #64748b;
    cursor: auto;
}
</style>