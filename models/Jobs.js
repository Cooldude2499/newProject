// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const ImageSchema = new Schema({
//     url: String,
//     filename: String,
// });

// ImageSchema.virtual("thumbnail").get(function () {
//     return this.url.replace("/upload", "/upload/h_200,w_200");
// });

// // opts are used to include the virtual properties to our model
// const opts = { toJSON: { virtuals: true } };

// const JobSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     image: [ImageSchema],
//     about: {
//         type: String,
//         required: true
//     },
//     // position
// }, opts);

// const JobModel = mongoose.model('Vehicles', JobSchema)

// const func = async () => {
//     await JobModel.deleteMany({})
//     const a = new JobModel({
//         name: "Electric Vehicle",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam magni sunt ipsa, obcaecati nostrum tempora sit nobis voluptatibus corrupti quasi dolorum, esse, est beatae hic nemo temporibus. Est, cum."
//     })
//     await a.save()
//     const b = new JobModel({
//         name: "Electric Vehicle 2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam magni sunt ipsa, obcaecati nostrum tempora sit nobis voluptatibus corrupti quasi dolorum, esse, est beatae hic nemo temporibus. Est, cum."
//     })
//     await b.save()
// }

// func();

// module.exports = JobModel;