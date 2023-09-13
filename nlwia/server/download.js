import ytdl from 'ytdl-core'
import fs from  'fs'

export function download(videoId) {
    const videoURL = "https://www.youtube.com.br/shorts/" + videoId
    console.log('Fazendo Download do video: '+ videoId)
    
}

ytdl(videoURL, {quality: "lowestaudio", filter: "audioonly"})