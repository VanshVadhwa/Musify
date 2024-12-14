import { Song } from "../models/song.model";
import { Album } from "../models/album.model";

export const createSong = async (req,res) => {
    if(!req.files || !req.imageFile || !req.audioFile) {
        res.status(400).json({
            message:"Please upload all the files",
            sucess:false,
        })
    }

    const { title, artist, albumId, duration} = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const song = new Song({
        title,
        artist,
        imageUrl,
        audioUrl,
        duration,
        albumId: albumId || null
    });

    await song.save();

}