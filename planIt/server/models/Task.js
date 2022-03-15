import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TaskSchema = new Schema(
    {
        name: { type: String, required: true },
        weight: { type: Number, required: true },
        isComplete: { type: Boolean, required: true, default: false },
        sprintId: { type: Schema.Types.ObjectId, ref: 'Sprint', required: true },
        projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
        creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

TaskSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})

TaskSchema.virtual('sprint', {
    localField: 'sprintId',
    foreignField: '_id',
    justOne: true,
    ref: 'Sprint'
})