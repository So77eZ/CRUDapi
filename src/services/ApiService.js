let array = [];
let id = 0;

 const Create = (obj) => {
    array.push({id:++id, ...obj});
    return 'Created'
}

 const ReadOne = (id) => {
   const obj = array.filter((item)=>
   item.id == id) 
    return obj
    
}

 const ReadAll = () => {
    return array
}

 const Delete = (id) => {
    array = array.filter((item) => 
    item.id != id);
    return array
    
}

 const Update = (id,obj) => {
     array = array.filter((item) => 
     item.id != id);
     array.push({id, ...obj});
    return array
    
}

module.exports = {Create,ReadAll,ReadOne,Update,Delete}