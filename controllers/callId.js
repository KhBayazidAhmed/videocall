const { writeFileSync, readFileSync, unlinkSync } = require("fs");

function getCallId(req, res) {
  try {
    let data = readFileSync("callId.json");
    res.status(200).send({
      success: true,
      message: "Call ID retrieved successfully",
      data: JSON.stringify(JSON.parse(data)),
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
function getAnswer(req, res) {
  console.log("get ");
  try {
    console.log("get answer");
    let data = readFileSync("answer.json");
    res.status(200).send({
      success: true,
      message: "Answer retrieved successfully",
      data: JSON.stringify(JSON.parse(data)),
    });
    unlinkSync("answer.json");
  } catch (error) {
    console.log(error.message);
    res.status(300).send({
      success: false,
      message: "Error retrieving answer",
      data: null,
    });
  }
}
function makeCallId(req, res) {
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
  try {
    writeFileSync("answer.json", JSON.stringify(req.body));
    res.status(200).send({
      success: true,
      message: "answer created successfully",
      data: null,
    });
  } catch (error) {
    res.status(300).send({
      success: false,
      message: "Error creating answer",
      data: error.message,
    });
  }
}

module.exports = { getCallId, makeCallId, makeAnswer, getAnswer };
