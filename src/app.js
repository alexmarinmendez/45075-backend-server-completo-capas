import express from 'express'
import userRouter from './routes/users.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8081

app.use(express.json())
app.use(cors())
app.use('/users', userRouter)

app.listen(PORT, () => console.log(`Server Up on port ${PORT}`))