import { useQuery } from "vue-query";

export function usePlaylists() {
  const { data: playlists, isLoading } = useQuery(
    "playlists",
    () => fetch("http://localhost:3000/playlists").then((res) => res.json()),
    {
      staleTime: 60 * 1000,
    }
  );

  return { playlists, isLoading };
}

export function usePlaylist(id: number) {
  const { data: playlist, isLoading } = useQuery(
    `playlists/${id}`,
    () =>
      fetch(`http://localhost:3000/playlists/${id}`).then((res) => res.json()),
    {
      staleTime: 60 * 1000,
    }
  );

  return { playlist, isLoading };
}
