const fs = require("fs");
let data = "Hi I am Anushka Jain.";


// ------WRITE-------

fs.writeFile("abc.txt", data, {
    encoding: "utf-8",
    flag: "w",
}, (err)=>{
    if(err){throw err} //program gets halted after throwing the error
    console.log("File-1 written successfully");
})

fs.writeFile("def.txt", "Hello Duniya!",(err)=>{
    if(err){throw err}
    console.log("File-2 written successfully")
})


// ------READ------

// fs.readFile("abc.txt",(err, data)=>{
//     if(err){throw err}
//     console.log(data); //getting buffer data
// })

// To read data in "readable" format
//Way-1
fs.readFile("abc.txt", {
    encoding: "utf-8",
    flag: "r"
},(err, data)=>{
    if(err){throw err}
    console.log(data);
})

//Way-2
fs.readFile("abc.txt", (err, data)=>{
    if(err){throw err}
    console.log(data.toString());
})


// ------UPDATE------
fs.appendFile("abc.txt", " I am from India", {}, (err)=>{
    if(err){throw err}
    console.log("File data appended successfully")
})


// ------DELETE------
fs.unlink("def.txt", (err)=>{
    if(err){throw err}
    console.log("File-2 deleted successfully");
})




