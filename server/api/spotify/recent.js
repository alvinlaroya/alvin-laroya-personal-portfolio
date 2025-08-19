export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    try {
        // Get access token using refresh token
        const tokenResponse = await $fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${config.spotifyClientId}:${config.spotifyClientSecret}`).toString('base64')}`
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: config.spotifyRefreshToken
            })
        })

        // Get recently played tracks
        const recentTracks = await $fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
            headers: {
                'Authorization': `Bearer ${tokenResponse.access_token}`
            }
        })

        return {
            track: recentTracks.items[0]?.track,
            played_at: recentTracks.items[0]?.played_at
        }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch Spotify data'
        })
    }
})