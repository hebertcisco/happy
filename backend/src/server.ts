import express from 'express'
import path from 'path'
import cors from 'cors'
import 'express-async-errors'

import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const port  = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(Number(port) || 3333)
