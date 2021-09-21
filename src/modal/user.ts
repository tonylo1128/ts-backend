import mongoose from "mongoose";

let Schema = mongoose.Schema;

import passportLocalMongoose from "passport-local-mongoose";


let Session = new Schema({
    refreshToken: {
        type: String,
        default: ""
    }
})



let User = new Schema({
    firstName:{
        type: String,
        default: ""
    },

    lastName: {
        type: String,
        default: ""
    },

    refreshToken:{
        type:[Session]
    }
})

User.set("toJSON", {
    transform: function (doc, ret, options) {
        delete ret.refreshToken;
        return ret;
    }
})
