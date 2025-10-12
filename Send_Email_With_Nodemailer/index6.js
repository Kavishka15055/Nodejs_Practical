import dotenv from 'dotenv';
import { log } from 'node:console';
import {createTransport} from 'nodemailer'

dotenv.config();

const mailServer = createTransport({
    service:'gmail',
    auth:{
        user:process.env.FROM_EMAIL,
        pass:process.env.EMAIL_PASSWORD
    }
})

mailServer.sendMail({

    
},(error,infor)=>{
    if(err){
        log('can not send the email')
    }else{
        log('email sent')
    }
})