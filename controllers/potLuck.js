const List = require('../models/PotLuck')
const Item = require('../models/PotLuckItem')
const cloudinary = require('cloudinary')

exports.createPotLuckList = async(req, res) => {
  try {
  const list = new List({
    name: req.body.title,
    description: req.body.description,
    eventDateTime: new Date(req.body.eventDateTime),
    items: [],
    createdBy: req.body.creator,
  })
  const savedList = await list.save()
  res.status(200)
  res.send(savedList)
  } catch (error) {
    console.error(error)
  }
}

exports.getPotLuckList = async(req, res) => {
  try {
    const list = await List
      .findOne({_id: req.params.id})
      .populate('items')
      .exec()
    res.status(200)
    res.send(list)
  } catch (error) {
    console.error(error)
  }
}

exports.addPotLuckListItem = async(req, res) => {
  try {
    const list = await List.findOne({_id: req.body.listId})
    const item = new Item({
      userId: req.body.userId,
      name: req.body.name,
      item: req.body.item,
      imageUrl: "",
      cloudinaryId: "",
    })
    // Upload image to cloudinary if file present
    if(req.files.length > 0) {
      const cloudImg = await cloudinary.uploader.upload(req.files[0].path, {width: 708, height: 400, crop: "fill", folder: "potLuckItems"})
      item.imageUrl = cloudImg.secure_url
      item.cloudinaryId = cloudImg.public_id
    }
    const newItem = await item.save()
    list.items.push(newItem._id)
    await list.save()
    const savedList = await list.populate('items')
    res.status(200)
    res.send(JSON.stringify(savedList.items))
  } catch (error) {
    console.error(error)
  }
}

exports.removePotLuckListItem = async(req, res) => {
  try {
    const list = await List.findOne({_id: req.body.listId})
    console.log(req.body)
    console.log(list)

    list.items.pull({_id: req.body.itemId})
    await list.save()
    const savedList = await list.populate('items')
    res.status(200)
    res.send(JSON.stringify(savedList.items))
    
  } catch (error) {
    console.error(error)
  }

}

