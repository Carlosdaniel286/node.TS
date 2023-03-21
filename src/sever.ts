import express from 'express'
import path from 'path'
import mainrouter from './routes/script'
import mustacheExpress from 'mustache-express'

const server = express()

server.set('view engine', 'mustache')
server.set('views' , path.join(__dirname ,'views'))
server.engine('mustache' , mustacheExpress())
server.use(express.static(path.join(__dirname,'../public')))
server.use(mainrouter)

server.listen(2000)

