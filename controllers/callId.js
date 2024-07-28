const { writeFileSync, readFileSync, unlinkSync } = require("fs");

function getCallId(req, res) {
  try {
    let data = readFileSync("callId.json");

    res.status(200).send({
      success: true,
      message: "Call ID retrieved successfully",
      data: JSON.parse(data),
    });
    unlinkSync("callId.json");
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error retrieving call ID",
      data: error.message,
    });
  }
}
function makeCallId(req, res) {
  if (!req.body) {
    res.status(300).send({
      success: false,
      message: "No Caller ID provided",
      data: null,
    });
  }
  try {
    writeFileSync("callId.json", JSON.stringify(req.body));
    res.status(200).send({
      success: true,
      message: "Call ID created successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating call ID",
      data: error.message,
    });
  }
}
function makeAnswer(req, res) {
  if (req.body.type !== "offer") {
    res.status(300).send({
      success: false,
      message: "No Caller ID provided",
      data: null,
    });
  }
  try {
    writeFileSync("answer.json", JSON.stringify(req.body));
    res.status(200).send({
      success: true,
      message: "answer created successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error creating answer",
      data: error.message,
    });
  }
}
function getAnswer(req, res) {
  try {
    let data = readFileSync("answer.json");

    res.status(200).send({
      success: true,
      message: "Answer retrieved successfully",
      data: JSON.parse(data),
    });
    unlinkSync("answer.json");
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error retrieving answer",
      data: error.message,
    });
  }
}
module.exports = { getCallId, makeCallId, makeAnswer, getAnswer };
