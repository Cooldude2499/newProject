const mongoose = require("mongoose");
const { Schema } = mongoose;
// const passportLocalMongoose = require("passport-local-mongoose");

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    author:{
        type: String,
        default: "Admin"
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: User

    }
});


const UserModel = mongoose.model('User', UserSchema)

const SeedUser = async () => {
    await UserModel.deleteMany({})
    const Admin = new UserModel({
        username: "admin",
        password: "admin"
    })
    await Admin.save()
}
// Admin.save()




SeedUser()

module.exports = UserModel

// UserSchema.plugin(passportLocalMongoose)
