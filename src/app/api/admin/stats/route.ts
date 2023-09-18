import {connect} from "@/dbConfig/dbConfig";
import WaitlistUser from "@/models/waitlistUserModel";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";

connect()


export async function GET(request: NextRequest){

    try{  

        const session = await getServerSession(options)

        if(session?.user?.role ==="admin"){
            const userCount = await User.countDocuments();
            const waitlistUserCount = await WaitlistUser.countDocuments();

            return NextResponse.json({
                success: true,
                userCount,
                waitlistUserCount
            })      

        }

        return NextResponse.json({
            success: false,
        })      
        
  
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
       
    }
 
}
