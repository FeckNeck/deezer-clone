import Fastify from "fastify";
import cors from "@fastify/cors";
import got from "got";

const fastify = Fastify();

await fastify.register(cors, {
  origin: true,
});

fastify.get("/playlists", async (req, reply) => {
  const response = await got("https://api.deezer.com/chart/0/playlists");
  reply.send(response.body);
});

fastify.get("/playlists/:id", async (req, reply) => {
  const response = await got(
    `https://api.deezer.com/playlist/${req.params.id}`
  );
  reply.send(response.body);
});

await fastify.listen({ port: 3000 });
