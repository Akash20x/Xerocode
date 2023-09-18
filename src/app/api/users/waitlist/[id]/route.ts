import {connect} from "@/dbConfig/dbConfig";
import WaitlistUser from "@/models/waitlistUserModel";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { options } from "@/app/api/auth/[...nextauth]/options";


connect()

export async function DELETE(request: NextRequest,context: any){
 
    try {
        const params = context.params;
        const id = params.id
        

        const session = await getServerSession(options)
        const sessionUserEmail = session?.user.email
        const existingUser = await User.findOneAndUpdate({ email: sessionUserEmail },
            { $pull: { waitlistEmails: { _id: id } } },
            { new : true });


        await WaitlistUser.deleteOne({
            _id: id,
          });
  

         const updatedMailsData = existingUser.waitlistEmails


        return NextResponse.json({
            success: true,
            updatedMailsData
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
       
    }
}
