import {connect} from "@/dbConfig/dbConfig";
import WaitlistUser from "@/models/waitlistUserModel";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

connect()


export async function GET(request: NextRequest){

    try{

        const userCount = await User.countDocuments();
        const waitlistUserCount = await WaitlistUser.countDocuments();

        return NextResponse.json({
            success: true,
            userCount,
            waitlistUserCount
        })      
  
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
       
    }
 
}