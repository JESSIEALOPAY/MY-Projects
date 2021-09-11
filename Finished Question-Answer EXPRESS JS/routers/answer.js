const express = require("express");
const router = express.Router({ mergeParams: true })
const { getAccessToRouth, getAnswerOwnerAccess } = require("../middlewares/authorization/auth");
const { addNewAnswerToQuestion, getAllAnswersByQuestion, getSingleAnswer, editAnswer, deleteAnswer, likeAnswer, undoLikeAnswer } = require('../controllers/answer');
const { checkAnswerExist } = require("../middlewares/database/databaseErrorHelpers");


router.post('/', getAccessToRouth, addNewAnswerToQuestion)
router.get('/', getAllAnswersByQuestion)
router.get('/:answer_id', checkAnswerExist, getSingleAnswer)
router.get('/:answer_id/like', [checkAnswerExist,getAccessToRouth], likeAnswer)
router.get('/:answer_id/undo_like', [checkAnswerExist,getAccessToRouth], undoLikeAnswer)


router.put('/:answer_id/edit', [checkAnswerExist, getAccessToRouth, getAnswerOwnerAccess], editAnswer)
router.delete('/:answer_id/delete', [checkAnswerExist, getAccessToRouth, getAnswerOwnerAccess], deleteAnswer)


module.exports = router



