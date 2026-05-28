import express from 'express'

const app=express();
const port=3000
app.use(express.json())

let TeaData=[];
let teaId=1;

app.post('/Teass',(req,res)=>{
    const {name,price}=req.body
    const newTea={id:teaId++,name,price}
    TeaData.push(newTea)
    res.send(newTea)
})
app.get('/Teass',(req,res)=>{
    res.status(200).send(TeaData)
})
//get
app.get('/teas/:id', (req, res) => {

    const tea = teaData.find(
        t => t.id === parseInt(req.params.id)
    )

    if (!tea) {
        return res.status(404).send('Tea not found')
    }

    res.status(200).send(tea)
})

//update
app.put('/teas/:id', (req, res) => {

    const tea = TeaData.find(
        t => t.id === parseInt(req.params.id)
    )

    if (!tea) {
        return res.status(404).send("Tea not found")
    }

    const { name, price } = req.body

    tea.name = name
    tea.price = price

    res.status(200).send(tea)
})

//delete
app.delete('/teas/:id', (req, res) => {

    const index = TeaData.findIndex(
        t => t.id === parseInt(req.params.id)
    )

    if (index === -1) {
        return res.status(404).send("Tea not found")
    }

    TeaData.splice(index, 1)

    res.status(200).send("Tea deleted")
})
 
app.listen(port,()=>{
    console.log(`Server is running at port ${port}...`)
})