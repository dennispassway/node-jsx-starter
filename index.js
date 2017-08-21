import compression from 'compression'
import express from 'express'
import path from 'path'
import { createEngine } from 'express-react-views'

const app = express()
app.use(compression())
app.use('/dist', express.static('dist'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.get('/', (req, res) => res.render('Home', { title: 'hoi' }))

app.listen(8000, () => console.log('Running on 8000'))
