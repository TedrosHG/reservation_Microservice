import { Schema, Prop } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema()
export class AbstranctDocument {
    @Prop({ type: SchemaTypes.ObjectId})
    _id: Types.ObjectId;
}