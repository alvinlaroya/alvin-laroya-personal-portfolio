<template>
    <div class="spotify-widget">
        <div v-if="loading" class="loading">
            Loading last played song...
        </div>

        <div v-else-if="track" class="track-info">
            <div class="track-image">
                <img :src="track.album.images[0]?.url" :alt="track.name" />
            </div>

            <div class="track-details">
                <h3>{{ track.name }}</h3>
                <p>{{track.artists.map(artist => artist.name).join(', ')}}</p>
                <p class="album">{{ track.album.name }}</p>
                <p class="played-time" v-if="playedAt">
                    Played {{ formatTime(playedAt) }}
                </p>
            </div>

            <div class="spotify-link">
                <a :href="track.external_urls.spotify" target="_blank" rel="noopener">
                    🎵 Open in Spotify
                </a>
            </div>
        </div>

        <div v-else class="no-data">
            No recent tracks found
        </div>
    </div>
</template>

<script setup>
const { data: spotifyData, pending: loading, error } = await $fetch('/api/spotify/recent')

const track = computed(() => spotifyData?.track)
const playedAt = computed(() => spotifyData?.played_at)

const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInMinutes = Math.floor((now - date) / (1000 * 60))

    if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`
    } else if (diffInMinutes < 1440) {
        return `${Math.floor(diffInMinutes / 60)} hours ago`
    } else {
        return `${Math.floor(diffInMinutes / 1440)} days ago`
    }
}

// Refresh data every 5 minutes
const { data } = await useFetch('/api/spotify/recent', {
    server: false,
    refresh: true,
    refreshCookie: 'spotify-refresh',
})

onMounted(() => {
    setInterval(() => {
        refreshCookie('spotify-refresh')
    }, 300000) // 5 minutes
})
</script>

<style scoped>
.spotify-widget {
    max-width: 400px;
    padding: 20px;
    background: linear-gradient(135deg, #1db954, #1ed760);
    border-radius: 12px;
    color: white;
    font-family: 'Helvetica Neue', Arial, sans-serif;
}

.track-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.track-image img {
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.track-details h3 {
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
}

.track-details p {
    margin: 5px 0;
    opacity: 0.9;
}

.album {
    font-style: italic;
}

.played-time {
    font-size: 0.9em;
    opacity: 0.7;
}

.spotify-link a {
    color: white;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 16px;
    border-radius: 20px;
    display: inline-block;
    transition: background 0.3s;
}

.spotify-link a:hover {
    background: rgba(255, 255, 255, 0.3);
}

.loading,
.no-data {
    text-align: center;
    padding: 20px;
    opacity: 0.8;
}
</style>