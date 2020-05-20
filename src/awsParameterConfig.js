import AWS from "aws-sdk";
import { Client } from "pg";

const ssm = new AWS.SSM();
const params = {
  Name: "config",
  WithDecryption: false,
};
ssm.getParameter(params, (err, data) => {
  if (err) {
    console.log(err, err.stack);
  } else {
    const config = JSON.parse(data.Parameter.Value);

    const client = new Client({
      MONGO_URL_PRODUCTION: config.MONGO_URL_PRODUCTION,
      MONGO_URL: config.MONGO_URL,
      PORT: config.PORT,
    });
    client.connect();

    client.query("SELECT NOW()", (err, res) => {
      console.log(err, res);
      client.end();
    });
  }
});
