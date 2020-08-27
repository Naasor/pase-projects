let express = require('express');
let bodyParser = require('body-parser')
let port = 4000;
let app = express();

bodyParser.json()

app.get('/', (req,res,next) => {
    res.send('Sandra Amofa')
})

app.get('/user', (req,res,next) => {
    res.send(new Date())
})

app.get('/users', (req,res,next) => {
    let firstname = req.query.firstname
    let users = [
        {
            firstName: 'Rich',
            lastName: 'Amofa',
            age: 35
        },
        {
            firstName: 'Aaron',
            lastName: 'Cahill',
            age: 45
        }
    ]

    if(req.query.hasOwnProperty('firstname')){
        let fndUser = users.filter((user, index) => {
            if (user.firstName === firstname) {
                return user
            }
        })
        res.send(fndUser)
    }else {
        res.send(users) 
    }
     
})

app.get('/users/:userId', (req, res, next) => {
    let userId = parseInt(req.params.userId)
    
    let users = [
        {
            firstName: 'Rich',
            lastName: 'Amofa',
            age: 35
        },
        {
            firstName: 'Aaron',
            lastName: 'Cahill',
            age: 45
        }
    ]
    let fndUser = users.filter((user, index) => {
        
        if(userId === index){
            return user
        }
    })
    if(fndUser.length){
        res.send(fndUser)
    } else {
        res.send('Please user doesnt exist')
    } 
})

app.get('/users/:userId/firstname', (req, res, next) => {
    let userId = parseInt(req.params.userId)
    
    let users = [
        {
            firstName: 'Rich',
            lastName: 'Amofa',
            age: 35
        },
        {
            firstName: 'Aaron',
            lastName: 'Cahill',
            age: 45
        }
    ]
    let fndUser = users.filter((user, index) => {
        
        if(userId === index){
            return user
        }
    })
    if(fndUser.length){
        res.send(fndUser[0].firstName)
    } else {
        res.send('Please user doesnt exist')
    } 
})




app.listen(port, () => {
    console.log(`server is listening to port ${port}`)
})

