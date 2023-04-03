import Express from "express"; 

const PORT = 3030

const app = Express()

app.get('/hello', (req, res) => {
    res.send("hello there")
})

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`)

})