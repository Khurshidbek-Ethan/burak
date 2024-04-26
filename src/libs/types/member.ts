import { MemberStatus, MemberType } from "../enums/member.enum";
import { ObjectId } from "mongoose";
import { Request } from "express";
import { Session } from "express-session";

export interface Member {
  // ObjectId ni mongoose dan olamz
  _id: ObjectId;
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

export interface MemberUpdateInput {
  _id: ObjectId;
  memberStatus?: MemberStatus;
  memberNick?: string;
  memberPhone?: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
}

// for React => SPA
export interface ExtendedRequest extends Request {
  member: Member;
  file: Express.Multer.File;
  files: Express.Multer.File[];
}

// for EJS => SSR
export interface AdminRequest extends Request {
  member: Member;
  session: Session & { member: Member }; // session ichida member ham bor degan manoni beradi.
  file: Express.Multer.File;
  files: Express.Multer.File[];
}

// import { MemberStatus, MemberType } from "../enums/member.enum";
// import { ObjectId } from "mongoose";
// import { Request } from "express";
// import { Session } from "express-session";

// export interface Member {
//   _id: ObjectId;
//   memberType: MemberType;
//   memberStatus: MemberStatus;
//   memberNick: string;
//   memberPhone: string;
//   memberPassword?: string;
//   memberAddress?: string;
//   memberDesc?: string;
//   memberImage?: string;
//   memberPoints: number;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface MemberInput {
//   memberType?: MemberType;
//   memberStatus?: MemberStatus;
//   memberNick: string;
//   memberPhone: string;
//   memberPassword: string;
//   memberAddress?: string;
//   memberDesc?: string;
//   memberImage?: string;
//   memberPoints?: number;
// }

// export interface LoginInput {
//   memberNick: string;
//   memberPassword: string;
// }

// export interface MemberUpdateInput {
//   _id: ObjectId;
//   memberStatus?: MemberStatus;
//   memberNick?: string;
//   memberPhone?: string;
//   memberPassword?: string;
//   memberAddress?: string;
//   memberDesc?: string;
//   memberImage?: string;
// }

// export interface ExtendedRequest extends Request {
//   member: Member;
//   file: Express.Multer.File;
//   files: Express.Multer.File[];
// }

// export interface AdminRequest extends Request {
//   member: Member;
//   session: Session & { member: Member };
//   file: Express.Multer.File;
//   files: Express.Multer.File[];
// }
