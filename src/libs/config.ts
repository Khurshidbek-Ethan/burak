export const MORGAN_FORMAT = `:method :url :response-time  [:status] \n`;
export const AUTH_TIMER = 24;
// kirib kelayotkan string ni objectId ga ozgartirish
// stringni mongodb object idga ogirish mantiqi
import mongoose from "mongoose";
export const shapeIntoMongooseObjectId = (target: any) => {
  return typeof target === "string"
    ? new mongoose.Types.ObjectId(target)
    : target;
};

// export const AUTH_TIMER = 24;
// export const MORGAN_FORMAT = `:method :url  :response-time  [:status]\n `;

// // bizning stringimizni ObjectIdga otkazish mantigini yozamaiz xar doyim shu mantiqdan foydalanamiz
// import mongoose from "mongoose";
// // kirib kelayotgan paramsni (target:any)ni typesini tekshiramiz
// export const shapeIntoMongooseObjectId = (target: any) => {
//   // typesini string  bolsa mongodb ObjectIdga ozgartiramiz agar targetimizni type string bolmasa ozini qaytarishini yozamiz
//   return typeof target === "string"
//     ? new mongoose.Types.ObjectId(target)
//     : target;
// };
