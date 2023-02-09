<script lang="ts" setup>
import { usePlaylistsStore } from '../store/store';

const { $state, next } = usePlaylistsStore();

</script>
<template>
    <div class="player">
        <p v-if="$state.currentTrack === null">No track selected...</p>
        <div v-else class="currentTrack">
            <p>{{ $state.currentTrack.title }}</p>
            <audio :src="$state.currentTrack.preview" controls @ended="next()" autoplay></audio>
        </div>
    </div>
</template>
<style scoped>
.player {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
}

.currentTrack {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
}
</style>