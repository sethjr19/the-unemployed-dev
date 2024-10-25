
import http from 'http'
import cors from 'cors'
import express from 'express'
 
const app = express()
const server = http.createServer(app);
const PORT = 3001

app.use(cors())

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})