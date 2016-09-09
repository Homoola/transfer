var CLOUDINARY_APP = "tabrisjs",

     CLOUDINARY_PRESET_NAME = "tabris_zq7brqwr";

var CLOUDINARY_RETRIEVE_URL = "http://res.cloudinary.com/"+CLOUDINARY_APP+"/image/upload",

 CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/"+CLOUDINARY_APP+"/image/upload";

/*******************

* Saving Images

*/

function saveImage(fileURI){

 return new Promise(function(resolve, reject) {

function win(r) {

 console.log("Code = " + r.responseCode);

 console.log("Response = " + r.response);

 console.log("Sent = " + r.bytesSent);

 resolve(JSON.parse(r.response).url);

}

function fail(error) {

 console.error("An error has occurred: Code = " + error.code);

 console.log("upload error source " + error.source);

 console.log("upload error target " + error.target);

 reject(error);

}

let options = new window.FileUploadOptions();

options.fileKey="file";

options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);

options.params = {

 upload_preset:CLOUDINARY_PRESET_NAME

};

options.chunkedMode = false;

var ft = new window.FileTransfer();

//ft.onprogress = function(progressEvent) {

//  if (progressEvent.lengthComputable) {

//	console.log("LOADED: "+progressEvent.loaded);

//	//loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);

//  }

//};

ft.upload(fileURI, CLOUDINARY_UPLOAD_URL, win, fail, options, true);

 });

}