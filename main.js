
//IT16010086
//Samarawickrama Y.M 

$(document).ready(function(){
     
    // client id of FileX application

    var clientId = "104722647639-e155a6h0tjivluv09cck11t956qnvoj1.apps.googleusercontent.com";

    // redirect_uri for the user

    var redirect_uri = "http://localhost:3000/upload.html";

    // scope of the FileX application

    var scope = "https://www.googleapis.com/auth/drive";

    // the url to which the user is redirected to 

    var url = "";


    // the click event for the login button

    $("#login").click(function(){

       // once the user clicks , this method will be run. it takes four parameters 

       signIn(clientId,redirect_uri,scope,url);

    });

    function signIn(clientId,redirect_uri,scope,url){
     
       // the actual url to which the user is redirected to 

       url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
       +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
       +"&access_type=offline";

       // this line makes the user redirected to the url

       window.location = url;

    }
});