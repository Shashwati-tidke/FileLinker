import File from '../model/file.js';

export const uploadImage = async (req, res) => {
    //console.log(req);

    const fileObj = {
        //filename: req.file.filename,
        path: req.file.path,
        name: req.file.originalname,
    }

    try {
        const file = await File.create(fileObj);
        res.status(200).json({
            message: "File uploaded successfully",
            path: `http://localhost:8000/files/${file._id}`
        });        
    } catch (error) {
        console.error("Error in uploadImage controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
    
}

export const getImage = async (req, res) => {
    try {
       const fileID = req.params.fileId;
    const file = await File.findById(fileID);
    if(!file){
        return res.status(404).json({message: "File not found"});
    }
    
    file.downloadCount += 1;
    await file.save();
    res.download(file.path, file.name); 
    //res.status(200).json({message: "File downloaded successfully", file: file});
    } catch (error) {
        console.error("Error in getImage controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}