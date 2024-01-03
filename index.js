


$("button").on("click",function (){
   var letter= this.classList[0];
  sound(letter);
  buttonAnimation(letter)
})

$(".sachsen").on("click",function(){
   var salam = new Audio("sounds/sachsen.mp3");
   salam.play();

   $("#sachsen").text("Sachsen")
   .show()
   .delay(3000)
   .fadeOut();
   
   });

   $(".berlin").on("click",function(){
       var salam = new Audio("sounds/berlin.mp3");
       salam.play();
   
    });

       $(".bayern").on("click",function(){
           var salam = new Audio("sounds/Bayern1.mp3");
           salam.play();
           
           });

           $(".branhdenburg").on("click",function(){
               var salam = new Audio("sounds/branhdenburg.mp3");
               salam.play();
               
               });

               $(".Mecklenburg").on("click",function(){
                   var salam = new Audio("sounds/Mecklenburg.mp3");
                   salam.play();
                   
                   });

                   $(".sachsenAnhalt").on("click",function(){
                       var salam = new Audio("sounds/sachsenAnhalt.mp3");
                       salam.play();
                   
                    });

                    $(".Thuringen").on("click",function(){
                       var salam = new Audio("sounds/Thuringen.mp3");
                       salam.play();
                   
                    });

                    $(".Schliesweg").on("click",function(){
                       var salam = new Audio("sounds/Schliesweg.mp3");
                       salam.play();
                   
                    });

                    $(".Hamburg").on("click",function(){
                       var salam = new Audio("sounds/Hamburg.mp3");
                       salam.play();
                   
                    });

                    $(".Bremen").on("click",function(){
                       var salam = new Audio("sounds/Bremen.mp3");
                       salam.play();
                   
                    });    

                    $(".Niedersachsen").on("click",function(){
                       var salam = new Audio("sounds/Niedersachsen.mp3");
                       salam.play();
                   
                    });  

                    $(".nrw").on("click",function(){
                       var salam = new Audio("sounds/nrw.mp3");
                       salam.play();
                   
                    }); 

                    $(".hessen").on("click",function(){
                       var salam = new Audio("sounds/hessen.mp3");
                       salam.play();
                   
                    }); 

                    $(".nlp").on("click",function(){
                       var salam = new Audio("sounds/nlp.mp3");
                       salam.play();
                   
                    });

                    $(".saarland").on("click",function(){
                       var salam = new Audio("sounds/saarland.mp3");
                       salam.play();
                   
                    });

                    $(".wurtenberg").on("click",function(){
                       var salam = new Audio("sounds/wurtenberg.mp3");
                       salam.play();
                   
                    });
  
//document.addEventListener("keydown",function (event){
//sound(event.key)
//buttonAnimation(event.key)
//} )




function sound(key) {

switch (key) {


    case "sachsen":
    var ba = new Audio("sounds/baa.mp3")
    ba.play();
    break;

    case "taa":
    var taa = new Audio("sounds/taa.mp3")
    taa.play();
    break;

    case "thaa":
    var thaa = new Audio("sounds/thaa.mp3")
    thaa.play();
    break;

    case "djim":
    var djim = new Audio("sounds/djeem.mp3")
    djim.play();
    break;

    case "hha":
    var hha = new Audio("sounds/hha.mp3")
    hha.play();
    break;

    case "kha":
    var kha = new Audio("sounds/khaa.mp3")
    kha.play();
    break;

    case "dal":
    var dal = new Audio("sounds/dal.mp3")
    dal.play();
    break;

    case "thal":
    var thal = new Audio("sounds/dhal.mp3")
    thal.play();
    break;

    case "ra":
    var ra = new Audio("sounds/rraa.mp3")
    ra.play();
    break;


    case "ra":
    var ra = new Audio("sounds/rraa.mp3")
    ra.play();
    break;

    case "zay":
    var zay = new Audio("sounds/sai.mp3")
    zay.play();
    break;

    case "sin":
    var sin = new Audio("sounds/ssin.mp3")
    sin.play();
    break;
       

    case "shin":
    var shin = new Audio("sounds/shin.mp3")
    shin.play();
    break;
    
    case "sad":
    var sad = new Audio("sounds/sad.mp3")
    sad.play();
    break;

    case "dhad":
    var dhad = new Audio("sounds/dhad.mp3")
    dhad.play();
    break;

    case "ta":
       var ta = new Audio("sounds/ddaa.mp3")
       ta.play();
       break;

       case "tha":
       var tha = new Audio("sounds/dhaa.mp3")
       tha.play();
       break;

       case "ayn":
        var ayn = new Audio("sounds/eein.mp3")
        ayn.play();
       break;

           case "ghayn":
           var ghayn = new Audio("sounds/ghein.mp3")
           ghayn.play();
           break;

           case "fa":
           var fa = new Audio("sounds/faa.mp3")
           fa.play();
           break;

           case "qaf":
           var qaf = new Audio("sounds/ggaf.mp3")
           qaf.play();
           break;

           case "kaf":
               var kaf = new Audio("sounds/kaf.mp3")
               kaf.play();
               break;

               case "lam":
                   var lam = new Audio("sounds/lam.mp3")
                   lam.play();
                   break;

                   case "mim":
                       var mim = new Audio("sounds/meem.mp3")
                       mim.play();
                       break;

                       case "nun":
                       var nun = new Audio("sounds/noon.mp3")
                       nun.play();
                       break;

                       case "haa":
                       var haa = new Audio("sounds/haa.mp3")
                       haa.play();
                       break;

                       case "waw":
                       var waw = new Audio("sounds/wow.mp3")
                       waw.play();
                       break;

                       case "ya":
                       var ya = new Audio("sounds/jaa'.mp3")
                       ya.play();
                       break;
   

       break;

    default:


}
}


function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey)
activeButton.classList.add("pressed");

setTimeout(function(){
   activeButton.classList.remove("pressed");
},100)
}
