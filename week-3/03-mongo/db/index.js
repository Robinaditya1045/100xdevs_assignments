const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongo-uri');
// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    discription: String,
    imageLink: String,
    price: Number

});

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
const User = mongoose.models.User ||mongoose.model('User', UserSchema);
const Course = mongoose.models.Course ||mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}