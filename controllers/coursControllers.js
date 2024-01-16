let { courses } = require('../data/courses');
const {validationResult} = require("express-validator");


const getAllCourses = (req,res) => {
    res.json(courses)
}

const getCours = (req,res)=>{
    const coursId = +req.params.coursId;
    const course = courses.find((course)=>course.id == coursId)
    if(!course){
        return res.status(404).json({msg : "cours not found"})
    }
    res.json(course)
}

const addCours = (req,res)=>{

    // if(!req.body.title){
    //     return res.status(400).json({Error: "title not provided"});
    // }
    // if(!req.body.price){
    //     return res.status(400).json({Error: "price not provided"});
    // }

    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json(error.array());
    }
    const course = {id : courses.length+1,...req.body};
    courses.push(course);

    res.status(201).json(course);
}

const updateCours = (req,res)=>{
    const coursId= req.params.coursId;

    let cours = courses.find((cours)=>cours.id===parseInt(coursId));

    if(!cours){
        return res.status(404).json({msg:"not found"})
    }

    cours = {...cours,...req.body}
    res.status(200).json(cours)
}

const deleteCours = (req,res)=>{
    const coursId= +req.params.coursId;
    courses = courses.filter((cours)=>cours.id !== coursId);
    
    res.status(200).json({success : true});
    
}

module.exports = {
    getAllCourses,
    getCours,
    addCours,
    updateCours,
    deleteCours
}