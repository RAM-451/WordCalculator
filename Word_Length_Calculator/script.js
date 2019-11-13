var print = function (message) {    
            document.getElementById("output").innerHTML="The total length is = " + message;
}

document.getElementById("btn").onclick=function(event){

    print(document.getElementById("str").value.length);

};
     