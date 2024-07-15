const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic

    const username = req.body.username
    const password = req.body.password


    User.create({username, password}).then(()=>{
        res.json({msg: "User created successfully"})
    }).catch(()=>{
        res.json({err: "an error occured"});
    })

    
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json(courses)
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const cid = req.params.courseId
    const username = req.headers.username

    await User.updateOne({username: username},{
        "$push":{
            purchasedCourses: cid
        }
    })

    res.json({msg:"courses purchased"});

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username
    const user = await User.findOne({username}).populate("purchasedCourses")
    const pcs = user.purchasedCourses;
    res.json(pcs);
});

module.exports = router