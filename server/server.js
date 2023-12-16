import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000

//? CORS SETTINGS
const whitelist = ['http://localhost:8000']
const corsOptions = {
  origin: (origun, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Denied By CORS'))
    }
  }
}

if (process.env.NODE)