const express = require("express");
const app = express();
// const cors = require("cors")
const mongoose = require("mongoose")
let User = require("./models/user")
let Complaint = require("./models/complaints")


app.use(express.json())

mongoose.connect("mongodb://localhost:27017/hostelDB", {useNewUrlParser: true, useCreateIndex: true})

// const baseComplaint0 = new Complaint({
//     id: 1,
//     title: "Chillbro",
//     content: "just chilling",
//     from: "Manjunath",
//     to: "Aditya",
//     likes: 0,
//     dislikes: 0
// })

// const baseComplaint1 = new Complaint({
//     id: 2,
//     title: "Chillbro",
//     content: "just chilling",
//     from: "Manjunath",
//     to: "Aditya",
//     likes: 1,
//     dislikes: 0
// })

// const baseComplaint2 = new Complaint({
//     id: 3,
//     title: "Chillbro",
//     content: "just chilling",
//     from: "Manjunath",
//     to: "Aditya",
//     likes: 0,
//     dislikes: 1
// })

// const baseComplaint3 = new Complaint({
//     id: 4,
//     title: "Chillbro",
//     from: "Manjunath",
//     to: "Aditya",
//     content: "just chilling",
//     likes: 1,
//     dislikes: 1
// })

// const defaultComplaints = [baseComplaint0, baseComplaint1, baseComplaint2, baseComplaint3]

// Complaint.find({}, (err, foundComplaints) => {
//     if(foundComplaints.length == 0){
//         Complaint.insertMany(defaultComplaints , (err) => {
//             console.log("insert error "+err);
//         })
//     }
// })

// app.use(cors)
// routers to handle different routes
const homeRouter = require('./routers/home')
const messRouter = require('./routers/mess')
const canteenRouter = require("./routers/canteen")
const complaintsRouter = require("./routers/complaints")

app.use("/home",homeRouter)
app.use("/canteen",canteenRouter)
app.use("/mess",messRouter)
app.use("/complaints",complaintsRouter)

app.post("/login", (req,res) => {
    const {name, emailid, password} = req.body;
    // console.log(req.body);
    // console.log(req);
    User.find({name})
    .then(user => {
        console.log(user);
        if(user == null){
            var newuser = new User({
                name,
                emailid,
                password
            })
            newuser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        }
        else{
            res.json(user[0]);
        }
    })
    .catch(err => console.log(err))
})


app.listen(4000,() => console.log("server running on port 4000"))