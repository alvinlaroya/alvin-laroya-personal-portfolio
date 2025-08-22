import { d as defineEventHandler, e as useRuntimeConfig, c as createError } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const recent = defineEventHandler(async (event) => {
  var _a, _b;
  const config = useRuntimeConfig();
  try {
    const tokenResponse = await $fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${Buffer.from(`${config.spotifyClientId}:${config.spotifyClientSecret}`).toString("base64")}`
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: config.spotifyRefreshToken
      })
    });
    const recentTracks = await $fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      headers: {
        "Authorization": `Bearer ${tokenResponse.access_token}`
      }
    });
    return {
      track: (_a = recentTracks.items[0]) == null ? void 0 : _a.track,
      played_at: (_b = recentTracks.items[0]) == null ? void 0 : _b.played_at
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch Spotify data"
    });
  }
});

export { recent as default };
//# sourceMappingURL=recent.mjs.map
