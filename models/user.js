import mongoose from 'mongoose';
import crypto from 'crypto';

const User = mongoose.Schema({
    email: { type: String },
    password: { type: String },
    salt: { type: String },
    name: { type: String },
    major: { type: String },
    studentId: { type: Number },
    sex: { type: Boolean },     // true: female, false: male
    admin: { type: Boolean },    // true: admin, false: not admin
    description: { type: String },
    authorized: { type: Boolean },
    profile_image: { type: String },
    boards: { type: String },
    comments: { type: String }
});

export const key = '2018miroSuhhny';

User.methods.generateHash = (password, salt) => {
    return crypto.pbkdf2Sync(password, salt, 174204, 64, 'sha512').toString('base64');
}

User.methods.validateHash = (password) => {
    return crypto.pbkdf2Sync(password, this.salt, 174204, 64, 'sha512').toString('base64') === this.password;
}

export default mongoose.model('user', User);