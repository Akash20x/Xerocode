import {connect} from "@/dbConfig/dbConfig";
import WaitlistUser from "@/models/waitlistUserModel";
import { validateEmail } from "@/utils/validator";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import User from "@/models/userModel";
  

connect()

export async function POST(request: NextRequest){
 
    try {
        const reqBody = await request.json()
        const {email} = reqBody

        const session = await getServerSession(options)
        
        let updatedCurrentUser; 

    
        
        if(!email){
            return NextResponse.json({
                error: "Email cannot be empty"},
                {status: 400}
            )
        }

        if(!validateEmail(email)){
            return NextResponse.json({
                error: "Please Enter valid email"},
                {status: 400}
            )
        }

        //check if user already exists
        const user = await WaitlistUser.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        
        const newUser = new WaitlistUser({
            email,
        })
 

        const savedUser = await newUser.save()

        if(session){
            const extractEmail = session?.user?.email         
            
            updatedCurrentUser = await User.findOneAndUpdate(
                { email: extractEmail }, // Find the user by their email
                {
                  $push: {
                    waitlistEmails: {
                      _id: newUser._id,
                      email: email,
                    },
                  },
                },
                { new: true } // Return the updated document
              );
                            
        }
     

        return NextResponse.json({
            message: "Success",
            success: true,
            savedUser
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
       
    }
}




export async function GET(request: NextRequest){

    try{

        if(request.nextUrl.searchParams.get('user[role]')==="admin"){
            const allWaitlistUsers = await WaitlistUser.find({})
            return NextResponse.json({
                success: true,
                waitlistData: allWaitlistUsers
            })            
        }

        const currentUserEmail = request.nextUrl.searchParams.get('user[email]')

        const user = await User.findOne({email:currentUserEmail})

        const UserWaitlistEmails = user?.waitlistEmails;
        
        return NextResponse.json({
                    success: true,
                    waitlistData: UserWaitlistEmails,
                })
  
    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
       
    }
 
}







export async function PUT(request: NextRequest){
 
    try {
        const reqBody = await request.json()
        
        const {_id,email} = reqBody

        const session = await getServerSession(options)
        const sessionUserEmail = session?.user.email
        const existingUser = await User.findOne({ email: sessionUserEmail });

        const existingUserWaitlist = existingUser.waitlistEmails.find((item) => item._id.toString() === _id);
        
        

        existingUserWaitlist.email = email

        await existingUser.save();
      
        const newWaitListItem = {
            _id,
            email,
          };
      
        await WaitlistUser.findOneAndUpdate(
            { _id: _id }, 
            { $set: newWaitListItem }, 
            { new: true } 
          );

         const updatedMailsData = existingUser.waitlistEmails

        return NextResponse.json({
            message: "Success",
            success: true,
            updatedMailsData
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
       
    }
}


