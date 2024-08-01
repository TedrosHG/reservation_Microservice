import { AbstranctDocument } from "@app/common";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false})
export class ReservationDocument extends AbstranctDocument {
    @Prop()
    timestamp: Date;

    @Prop()
    startDate: Date;

    @Prop()
    endDate: Date;

    @Prop()
    userId: string;

    @Prop()
    placeId: string;

    @Prop()
    invoiceId: string;
}

export const ReservationSchema = SchemaFactory.createForClass(ReservationDocument);
