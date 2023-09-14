const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    const videoURL = input.value
    
    if(!videoURL.includes("shorts")){
       return content.textContent = "Esse video nao parece ser um short. "

    }

    const [_, params] = videoURL.split("/shorts/")
    const [videoID] = params.split("?si")
    console.log(videoID)

})