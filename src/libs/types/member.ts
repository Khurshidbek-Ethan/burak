import { MemberStatus, MemberType } from "../enums/member.enum";
import {ObjectId} from "mongoose";


export interface Member {
    _id: ObjectId;
    memberType:MemberType;
    memberStatus:MemberStatus;
    memberNick:string;
    memberPhone:string;
    memberPassword?:string; 
    memberAddress?:string;
    memberDesc?:string;
    memberImage?:string;
    memberPoints:number;
    createAt:Date;
    updateAt:Date;
}



export interface MemberInput{
    memberType?:MemberType;
    memberStatus?:MemberStatus;
    memberNick:string;
    memberPhone:string;
    memberPassword:string; 
    memberAddress?:string;
    memberDesc?:string;
    memberImage?:string;
    memberPoints?:number;

}