import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

app.get('/summary/:id', (request, response) => {
    response.send('ID do video: '+ request.params.id)
})

app.listen(3333, () => console.log('server escutando na porta 3333'))