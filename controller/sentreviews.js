const sentreviews = require("../model/reviews");
const userModel = require("../model/userModel");

exports.sender = async (req, res) => {
    const id = req.params.id;
  try {
    const findUser=await userModel.findById(id)
    if(findUser){
    const SEND = new sentreviews({
      review:req.body.review,
    });

     SEND.save(SEND);
    res.json({ message: "reviews sent" });
    return;
}else{
    res.json("review not sent")
}
  } catch (error) {
    res.json(error.message);
    console.log(error.message);
  }
};
exports.listreviews = async (req, res) => {
  
  try {
    const lackky = await userModel.findById(id);

    res.json(lackky);
    return;
  } catch (error) {}
};
