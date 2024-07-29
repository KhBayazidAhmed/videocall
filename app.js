const express = require("express");
const cors = require("cors");
const {
  getCallId,
  makeCallId,
  makeAnswer,
  getAnswer,
} = require("./controllers/callId");

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.post("/make-call-id", makeCallId);
app.get("/get-call-id", getCallId);
app.post("/make-answer", makeAnswer);

app.get("/get-answer", getAnswer);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
