var CLOUDINARY_APP = "wino",

     CLOUDINARY_PRESET_NAME = "tabris_zq7brqwr";

var CLOUDINARY_RETRIEVE_URL = "http://res.cloudinary.com/"+CLOUDINARY_APP+"/image/upload",

 CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/"+CLOUDINARY_APP+"/image/upload";

/*******************

* Saving Images

*/

function saveImage(fileURI){
//var fileURI = data.filepath;
console.log(fileURI)
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
//wino add
var page = new tabris.Page({
  title: "homoola upload!",
  topLevel: true
});

 var number = new tabris.TextInput({
  message: "number",
  layoutData: {left: "10%", top: "10%", right: "10%"}
}).appendTo(page);
 var urlInput = new tabris.TextInput({
  message: "message",
  layoutData: {left: "10%", top: [number, 15], right: "10%"}
}).appendTo(page);

var button = new tabris.Button({
  text: "upload url",
  layoutData: {top: [urlInput, 15], centerX: 0}
}).appendTo(page);

var textView = new tabris.TextView({
  text: "",
  layoutData: {top: [button, 15], centerX: 0}
}).appendTo(page);

button.on("select", function() {
     
textView.set("text","play save test ...");

var msg = urlInput.get("text");
var num = number.get("text");

        console.log("num=" + num + ", msg= " + msg);
       function success(parent) {
            saveImage(parent);
    console.log("Parent Name: " + parent);
}

function fail(error) {
    console.log("errrr",error);
}

// Get the parent DirectoryEntry
fileChooser.open(success, fail);
///
//var fileURL = entry.toURL();
//console.log(fileURL);



/*
        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { console.log('msg sent successfully'); };
        var error = function (e) { console.log('msg Failed:' + e); };
       // sms.send(num, msg, options, success, error);
     //end sms
  
//return;
     window.plugins.CallNumber.callNumber(   function(result){
  console.log("Success:"+result);
}, function(result) {
  console.log("Error:"+result);
}
, num, true);
*/
//console.log(cordova.file);
//saveImage(cordova.file);
console.log("filechoser play");

cordova.plugins.notification.local.schedule({
    title: num,
    message: msg,
    sound: "http://festivalmerzouga.com/2015/fr/wp-content/uploads/2016/08/fim.mp3",
    icon: "http://burtoncr.com/css/images/099303-facebook-logo-square.png"
});
//filechooser.open( {}, saveImage, function (msg) {
  //console.log(msg);
//} );
console.log("filechoser afet play");
//fetch("http://res.cloudinary.com/wino/image/fetch/"+urlInput.get("text")).then(function(result) {
 // return result.text();
//}).then(function(text) {
 // console.log("accept : text = vide = ",text)
//}).catch(function(e) {
        //console.log("error:",e);
 //   });

});
page.open();



