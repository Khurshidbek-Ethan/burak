import {Request,Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

 
const memberService = new MemberService();
const authService = new AuthService();

const memberController:T = {};
memberController.signup = async (req:Request,res:Response)=>{
    try{
      console.log('signup');
      console.log("body:",req.body);
 
      const input: MemberInput = req.body,
       result:Member = await memberService.signup(input);
       const token = await authService.createToken(result);
      //  console.log("token signup :", token);
       res.cookie("accessToken", token , {
        maxAge:AUTH_TIMER * 3600 * 100,
      httpOnly:false
     });
       

      res.status(HttpCode.CREATED).json({member:result, accessToken:token});

 
  } catch(err){
       
     console.log("Error,signup:",err);
    //  res.status(Errors.statndard.code).json(Errors.statndard);
     if(err instanceof Errors)res.status(err.code).json(err);
      else res.status(Errors.statndard.code).json(Errors.statndard);

 
 
    }
 };
 
 
 memberController.login = async (req:Request,res:Response)=>{
    try{
      console.log('login');
      const input:LoginInput=req.body,
       result = await memberService.login(input),
       token = await authService.createToken(result);
    //  console.log("token => login ",token);
      res.cookie("accessToken", token , {
        maxAge:AUTH_TIMER * 3600 * 100,
      httpOnly:false
     });
       

      res.status(HttpCode.OK).json({member:result, accessToken:token});
    } catch(err){
     console.log("Error,login:",err);
     if(err instanceof Errors)res.status(err.code).json(err);
     else res.status(Errors.statndard.code).json(Errors.statndard);

    }
 };
 

 export default memberController;