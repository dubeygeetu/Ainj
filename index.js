const express=require("express")
const {userRouter}=require("./routes/user.route")
const {noteRouter}=require("./routes/note.route");
const { authenticate } = require("./middleware/authenticate");
const { connection } = require("./config/db");


const app=express();
app.use(express.json())

app.use("/user",userRouter)
app.use(authenticate)
app.use("/notes",noteRouter)

app.listen(4500,async (req,res)=>{
    try {
        await connection
        console.log("connected to db")

    } catch (err) {
        console.log(err.message)
    }
    console.log("Server running at 4500")
})