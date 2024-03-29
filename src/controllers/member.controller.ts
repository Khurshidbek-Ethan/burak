import {Request,Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Error";

 
const memberService = new MemberService();

const memberController:T = {};
memberController.signup = async (req:Request,res:Response)=>{
    try{
      console.log('signup');
      console.log("body:",req.body);
 
      const input: MemberInput = req.body,
       result:Member = await memberService.signup(input);
    // TODO:TOKENS AUTHENTICATION

      res.json({member:result})
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
       result = await memberService.login(input);
    // TODO:TOKENS AUTHENTICATION
     
      res.json({member:result});
    } catch(err){
     console.log("Error,login:",err);
     if(err instanceof Errors)res.status(err.code).json(err);
     else res.status(Errors.statndard.code).json(Errors.statndard);

    }
 };
 

 export default memberController;