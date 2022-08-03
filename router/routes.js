const express = require("express");
const router = express.Router();
const { validation } = require("../auth/auth");
const { employeeAuth } = require("../auth/employeeAuths");

const employeeController = require("../controller/employeeController");
const userController = require("../controller/userController");
const customProposalController = require("../controller/customProposalController");
const existingProposalController = require("../controller/existingProposalController");
const sentreviewsController = require("../controller/sentreviews");
// console.log(userController.createUser)
//Note: the post method takes two parameter name of the path and callbackfunc from userModel mode;
router.post("/create-reviews/:id", sentreviewsController.sender);
router.get("/get-reviews/:id", sentreviewsController.listreviews);

router.post("/create-user", userController.createUser);
router.get("/get-user", userController.findUser);
router.put("/update-user", userController.updateUser);
router.delete("/delete-user", userController.deleteUser);
// router.post("/:id/verified-email/:token", userController.verifyEmail);
router.get("/:id/verify-email/:token", userController.verifyEmail);

//Routes for customPropsoal
router.put(
  "/create-custom-proposal",
  customProposalController.createCustomProposal
);
router.get("/get-custom-proposal", customProposalController.findCustomProposal);
router.put(
  "/update-custom-proposal",
  customProposalController.updateCustomProposal
);
router.delete(
  "/delete-custom-proposal",
  customProposalController.deleteCustomProposal
);

//Routes for existingProposal
router.post(
  "/create-existing-proposal",
  existingProposalController.createExistingProposal
);
router.get(
  "/get-existing-proposal",
  existingProposalController.findExistingProposal
);
router.put(
  "/update-existing-proposal",
  existingProposalController.updateExistingProposal
);
router.delete(
  "/delete-existing-proposal",
  existingProposalController.deleteExistingProposal
);

router.post("/create-userEmployee", employeeController.createUserEmployee);
router.get(
  "/get-userEmployee",
  validation,
  employeeController.finduserEmployee
);
router.put(
  "/update-userEmployee",
  validation,
  employeeAuth,
  employeeController.updateuserEmployee
);

module.exports = router;
