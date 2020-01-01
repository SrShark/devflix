import Axios from 'axios'

export class VideoService {
  constructor () {
    this.API_KEY = process.env.REACT_APP_API_KEY
    this.idVideos = []
  }

  async searchVideos (query) {
    try {
      const videos = await Axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 12,
          q: query,
          key: this.API_KEY
        }
      })

      videos.data.items.forEach(video => {
        this.idVideos.push(video.id.videoId)
      })

      const videosWithChannel = await this.getVideos(this.idVideos)

      return videosWithChannel
    } catch (e) { console.error(e) }
  }

  async getVideos (idVideos) {
    try {
      const videos = await Axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          id: idVideos.toString(),
          key: this.API_KEY
        }
      })

      const videosWithChannel = await this.getChannels(videos.data.items)
      return videosWithChannel
    } catch (e) { console.error(e) }
  }

  async getChannels (videos) {
    try {
      let idChannels = []

      videos.forEach(video => {
        if (video.snippet.channelId) idChannels.push(video.snippet.channelId)
      })

      idChannels = [...new Set(idChannels)] // Elimino duplicados

      const channels = await Axios.get('https://www.googleapis.com/youtube/v3/channels', {
        params: {
          part: 'snippet',
          id: idChannels.toString(),
          key: this.API_KEY
        }
      })

      videos.forEach(video => {
        const channel = channels.data.items.filter(channel => channel.id === video.snippet.channelId)[0]

        video.channel = {
          id: channel.id,
          thumbnail: channel.snippet.thumbnails.default.url
        }
      })

      return videos
    } catch (e) { console.error(e) }
  }
}
