import ex from 'express';
import dir from 'path';

const app = ex()
const dir_front = dir.resolve()
app.use(ex.static("frontend/build"))

app.listen('5500',function(){
    console.log('servidor iniciado')
})

app.get('/', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/form_login_view',function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/form_register_view',function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/data_form_view',function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})