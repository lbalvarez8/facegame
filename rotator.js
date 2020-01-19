

var bChange = document.getElementById("buttonChange");

var hairArray = ["Zinaidahair.jpg", "Fridahair.jpg", "Kusamahair.jpg"];
var eyesArray = ["Zinaidaeyes.jpg", "Fridaeyes.jpg", "Kusamaeyes.jpg"];
var noseArray = ["Zinaidanose.jpg", "Fridanose.jpg", "Kusamanose.jpg"];
var mouthArray = ["Zinaidamouth.jpg", "Fridamouth.jpg", "Kusamamouth.jpg"];
var neckArray = ["Zinaidaneck.jpg", "Fridaneck.jpg", "Kusamaneck.jpg"];

var i = 0;

function changeImage(id) {
    console.log("Id received:", id);
    var frontImage = document.getElementById(id);

    switch (id) {
        case 'flipHair':
            frontImage.setAttribute("src", hairArray[i]);
            break;
        case 'flipEyes':
            frontImage.setAttribute("src", eyesArray[i]);
            break;
        case 'flipMouth':
            frontImage.setAttribute("src", mouthArray[i]);
            break;

        case 'flipNeck':
            frontImage.setAttribute("src", neckArray[i]);
            break;

        case 'flipNose':
            frontImage.setAttribute("src", noseArray[i]);
            break;
        default:
    }

    i++;
    if (i >= 3) {
        i = 0;
        clearInterval(changeTime);
    }
}

var changeTime = setInterval(changeImage, 3000);