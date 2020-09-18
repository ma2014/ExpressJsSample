/*
you can use Postman for testing and giving an input such as following with POST method:
{
    "id": 2,
        "first_name": "Mahdiyeh",
        "last_name": "Parham",
        "Tel": "+982222222222"
}

also you can fech data stored in json file with GET method or address http://localhost:3000 in the browser

*/

const express=require('express');
const data=require('./data/MOCK_DATA.json');

const app=express();
const port= process.env.PORT||3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send(data.properties)
});

app.post('/item',(req,res)=>{
    console.log(JSON.stringify(req.body));
    res.json(req.body)
})

app.listen(port,()=>{
    console.log(`The app is running on port ${port}`);
})