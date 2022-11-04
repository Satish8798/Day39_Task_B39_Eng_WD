const fs = require( 'fs' );

module.exports.createFile=((req,res,next)=>{
   try {
    const currrentTime= new Date();
    fs.writeFile('./files/time.txt',"Current Timestamp:"+ currrentTime.toString(),()=>{
    const data=fs.readFileSync('./files/time.txt',"utf8")
    res.send({
        fileStatus: "created",
        currentTime: data,
    })
   })
   } catch (error) {
    res.send({
        error
    })
   } 
});

module.exports.getFilesList = (req,res,next)=>{
    try {
        fs.readdir("./files",(err,files)=>{
            res.send(files)
        })
    } catch (error) {
        res.send({
            error
        });
    }
}