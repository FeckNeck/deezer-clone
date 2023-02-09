import { defineStore } from "pinia";

export const usePlaylistsStore = defineStore("playlists", {
  state: () => ({
    currentTrack: null,
    trackQueue: new Set(),
  }),
  actions: {
    playTrack(track: any) {
      this.currentTrack = track;
    },
    addToQueue(track: any) {
      this.trackQueue.add(track);
    },
    removeFromQueue(track: any) {
      this.trackQueue.delete(track);
    },
    next() {
      if (this.trackQueue.size > 0) {
        const track = this.trackQueue.values().next().value;
        this.currentTrack = track;
        this.trackQueue.delete(track);
      }
    },
  },
});
