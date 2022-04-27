app.get('/', (req,res)=>{
    res.json({
        personas
    })
})
app.get('/email', function (req, res) {
    const {email}=req.query
    const persona= personas.find(item => item.email===email )
    res.json({
        persona
    })
})
app.get('/login', function (req, res) {
    const {email,password}=req.body
    const persona= personas.find(item => item.email===email && item.password==password)
    if (persona)
        res.json({
            "msg":"bienvenido"
        })
    else
    res.json({
        "msg":"Ud que hace aqui."
    })
})
app.post('/', function (req, res) {
    personas.push(req.body)
    res.json({
        "msg":"Registro agregado"
    })
})
app.delete('/email', function (req, res) {
    const {email}=req.query
    personas=personas.filter(item => item.email != email)
    res.json({
        "msg":"Registro eliminado"
    })
})
