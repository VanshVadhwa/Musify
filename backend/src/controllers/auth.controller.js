import { User } from "../models/user.model";

export const authCallBack = async(req,res) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;
        const user = await User.findOne({clerkId: id});

        if(!user) {
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl,
            })
        }

        res.status(200).json({
            message: "User is created successfully",
            success: true
        })
        
    } catch (error) {
        console.error("Error in Auth callback");
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
        })
    }
}