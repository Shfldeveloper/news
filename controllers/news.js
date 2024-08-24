const mongoose = require('mongoose')
const newsModel = require('./../models/news')

exports.create = async (req, res) => {
    const { title, description } = req.body

    const createdNews = await newsModel.create({ title, description })

    if (!createdNews) {
        return res.status(500).json({ message: "something went wrong please try again. || Server Eror." })
    }

    return res.status(201).json(createdNews)

}

exports.getAll = async (req, res) => {

    const allNews = await newsModel.find({})

    if (!allNews) {
        return res.status(500).json({ message: "Server Error" })
    }

    return res.json(allNews)

}
exports.deleteOne = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const isIDValid = mongoose.Types.ObjectId.isValid(id)
    console.log(isIDValid)

    if (!isIDValid) {
        return res.status(400).json({ message: "the given id is not valid" })
    }

    const deletedNews = await newsModel.deleteOne({ _id: id })
    console.log(deletedNews)

    return res.status(200).json(deletedNews)
}
exports.update = async (req, res) => {
    const { id } = req.params

    const { title, description } = req.body

    const isIDValid = mongoose.Types.ObjectId.isValid(id)


    if (!isIDValid) {
        return res.status(400).json({ message: "the given id is not valid" })
    }
    //updating the news
    const news = await newsModel.findOneAndUpdate({ _id: id }, {title , description})

    if(!news){
        return res.status(500).json({message : "something went wrong..."})
    }

    //getting the updated news and send it to the client
    const Upadatednews = await newsModel.findOne({ _id: id })
    

    return res.status(200).json(Upadatednews)

}
