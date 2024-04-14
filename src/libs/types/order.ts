import {ObjectId} from "mongoose";
import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";


export interface OrderItem {
    _id: ObjectId;
     itemQuantity: number;
     itemPrice: number;
     orderId: ObjectId;
     productId: ObjectId;
     createdAt: Date;
     updatedAt: Date;

}

export interface Order {
    _id: ObjectId;
    orderTotal: number;
    orderDelivery: number;
    orderStatus: OrderStatus;
    memberId: ObjectId;
    createdAt: Date;
    updatedAt: Date;

    orderItems:OrderItem[];
    productData:Product[];

}


export interface OrderItemInput {
      productId: ObjectId;
    itemQuantity: number;
    itemPrice: number;
    orderId?: ObjectId;
}