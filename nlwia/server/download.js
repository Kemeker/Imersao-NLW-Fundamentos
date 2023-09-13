import ytdl from 'ytdl-core'
import fs from  'fs'

export function download(videoId) {
    const videoURL = "https://www.youtube.com/shorts/" + videoId
    console.log('Fazendo Download do video: '+ videoId)
    
    ytdl(videoURL, {quality: "lowestaudio", filter: "audioonly"})
    .on("info", (info)=>{ // etapa de pegar informaçao
        const seconds = info.formats[0].approxDurationMs / 1000
        if (seconds > 60){
            throw new Error("A duraçao do video e maior que 60 segundos")
        }
        
        

    }).on("end", () => { // etapa de fazer download do video
        console.log("Download concluido")
    })
    .on("error", (error) => { // Etapa se acontecer algum erro
        console.log("Nao foi possivel fazer o Download do video. Detalhes do erro: ", error)
    })
    .pipe(fs.createWriteStream("../temp/audio.mp4"))   
}