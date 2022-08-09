//controller file is responsible for performing operation
const existingProposalModel = require("../model/existingProposalModel");

//To Post do this:
exports.createExistingProposal = async (req, res) => {
  try {
    const existingProposal = new existingProposalModel({
      fullname: req.body.fullname,
      email: req.body.email,
      confirmEmail: req.body.confirmEmail,
      address: req.body.address,
      age: req.body.age,
      stateOfOrigin: req.body.stateOfOrigin,
      phoneNumber: req.body.phoneNumber,
      city: req.body.city,
      NIN: req.body.NIN,
      gender: req.body.gender,
    });

    if (existingProposal.email === existingProposal.confirmEmail) {
      await existingProposal.save();
      res.json({
        status: 200,
        message: existingProposal,
      });
    } else {
      res.json("invalid email.");
    }
    return;
  } catch (error) { 
    res.json(error.message);
  }
};

//To do GET do this:
exports.findExistingProposal = async (req, res) => {
  try {
    const id = req.query.id;
    const existingProposal = await existingProposalModel.findById(id);
    res.json({
      status: 200,
      existingProposal,
    });
    return;
  } catch (error) {
    res.json({
      status: 500,
      message: error.message,
    });
  }
};

//TO Update do this:
exports.updateExistingProposal = async (req, res) => {
  try {
    const id = req.query.id;
    const updateExistingProposal =
      await existingProposalModel.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false,
      });
    res.json({
      status: 200,
      existingProposal: updateExistingProposal,
    });
    return;
    /*the findByIdUpdate method has two arg  
		one: the id of the doc to be updated and 
		second: the actual data we are updating the document with*/
  } catch (error) {
    res.json(error.message);
  }
};

//To Delete do this:
exports.deleteExistingProposal = async (req, res) => {
  try {
    const id = req.query.id;
    const deleteExistingProposal =
      await existingProposalModel.findByIdAndDelete(id);
    res.json({
      status: 200,
      existingProposal: deleteExistingProposal,
    });
    return;
  } catch (error) {
    res.json(error.message);
  }
};
