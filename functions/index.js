const functions = require("firebase-functions");
const formidable = require("formidable-serverless");
const firebase = require("firebase-admin");

firebase.initializeApp();


exports.uploadFile = functions.https.onRequest((req, res) => {
  var form = new formidable.IncomingForm();
  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      var file = files.file;
      if (!file) {
        reject(new Error("no file to upload, please choose a file."));
        return;
      }
      var filePath = file.path;
      console.log("File path: " + filePath);
      const storage = firebase.storage();
      const response = await storage.bucket("gs://co-one-demo.appspot.com").upload(filePath);

      const fullMediaLink = response[0].metadata.mediaLink + "";
      const mediaLinkPath = fullMediaLink.substring(
        0,
        fullMediaLink.lastIndexOf("/") + 1
      );
      const downloadUrl =
        mediaLinkPath +
        encodeURIComponent(response[0].name) +
        "?alt=media&token=uhmm";

      console.log("downloadUrl", downloadUrl);

      resolve({ fileInfo: response[0].metadata, downloadUrl }); // Whole thing completed successfully.
    });
  })
    .then((response) => {
      res.status(200).json({ response });
      return null;
    })
    .catch((err) => {
      console.error("Error while parsing form: " + err);
      res.status(500).json({ error: err });
    });
});