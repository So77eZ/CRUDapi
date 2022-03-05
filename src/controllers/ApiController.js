const app = require(`express`);
const { Create, ReadAll, ReadOne, Delete, Update } = require("../services/ApiService");
const apiController = app.Router();
let array = [];


apiController.post('/', (req, res) => {
    const obj = req.body;
    const result = Create(obj)
    res.send(result);

});

apiController.get('/',(req, res) => {
    res.send(ReadAll())

});

apiController.get('/:id',(req, res) => {
    const id = req.params.id;
    res.send(ReadOne(id))
    
});

apiController.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(Delete(id))
});

apiController.put('/:id',(req, res) => {
    const id = req.params.id;
    const obj = req.body;
    res.send(Update(id,obj))
});
module.exports=apiController