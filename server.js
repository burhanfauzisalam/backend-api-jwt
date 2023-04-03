const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const db = require("./models/model.js")



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// app.get('/', (req, res) => {
//     res.json({
//         message: "Server online"
//     })
// })

require('./routes/parents.route.js')(app)
require('./routes/auth.route.js')(app)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('database connected')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})