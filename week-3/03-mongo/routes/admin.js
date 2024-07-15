const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password


    Admin.create({username, password}).then(()=>{
        res.json({msg: "Admin created successfully"})
    }).catch(()=>{
        res.json({err: "an error occured"});
    })

    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const discription = req.body.discription
    const price = req.body.price
    const imgurl = req.body.imgurl

    const newCourse =  await Course.create({title,discription,price,imgurl})
    res.json({
        msg: "course created successfully",
        courseid: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    const courses = await Course.find({});
    res.json(courses)
});

module.exports = router;