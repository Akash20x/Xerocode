import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { validateEmail } from "@/utils/validator";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

connect()

export async function POST(request: NextRequest){
 
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody

        if(!email || !password) {
            return new NextResponse('Missing Fields', { status: 400 })
        }
    

        if(!validateEmail(email)){
            return NextResponse.json(
                 "Please Enter valid email",
                {status: 400}
            )
        }

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json("User already exists", {status: 400})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password:hashedPassword,
            role: undefined
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "Success",
            success: true,
            savedUser
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
       
    }
}


