import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import { createEngine } from 'express-react-views'

const app = express()
app.use(compression())
app.use(helmet())
app.use('/dist', express.static('dist'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.get('/', (req, res) => res.render('Home', { title: 'Home' }))

app.set('port', (process.env.PORT || 8000))

app.listen(app.get('port'), err => console.log(err || `Running on port: ${app.get('port')}`))
