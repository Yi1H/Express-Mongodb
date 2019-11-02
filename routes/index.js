let express = require("express");
let router = express.Router();

let  mongoose = require("mongoose");

let model = require("../models/model");
let Demo =model.Demo;

mongoose.connect("mongodb://localhost/express_demo");

//首页
router.get("/",function (req,res,next) {
    Demo.find(function (err,data) {
        res.render("index",{
            title : "Express + MongoDB实例",
            data : data
        })
    })
});

//数据添加页面
router.get("/add.html",function (req,res) {
        res.render("add",{
            title : "添加数据",
        })
});

//添加数据
router.post("/add.html",function (req,res) {

    //获取添加数据集合
    let demo =new Demo({
        uid : req.body.uid,
        title : req.body.title,
        content : req.body.content
    });

    //保存数据
    demo.save(function (err,data) {
        if (err){
            console.log("error")
        }
        console.log(data);
        res.redirect("/");
    })
});

//删除数据
router.get("/del.html",function (req,res) {
    let id = req.query.id;

    //判断id是否存在来删除数据库中对应的id
    if ( id && id !== ''){
        console.log("删除id:"+id);
        Demo.findByIdAndRemove(id,function (err,data) {
            console.log(data);
            res.redirect("/");
        })
    }
});

//获取更新数据页面
router.get("/update.html",function (req,res) {
    let id = req.query.id;

    if (id && id !==''){
        Demo.findById(id,function (err,data) {
            if (err){
                console.log("error")
            }
            console.log("数据："+data);
            res.render("update",{
                title : "更新数据",
                demo : data
            })
        })
    }
});

//更新数据
router.post("/update.html",function (req,res) {


    let demo = {
        uid : req.body.uid,
        title : req.body.title,
        content : req.body.content
    };

    let id = req.body.id;

    if(id && id !==''){
        Demo.findByIdAndUpdate(id,demo,function (err,data) {
            console.log("更新数据："+data);
            res.redirect("/")
        })
    }
});

module.exports = router;
