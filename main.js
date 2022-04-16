//https://teachablemachine.withgoogle.com/models/s1cs5zvDP/

function startClassification() {

    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/s1cs5zvDP/model.json", modelLoaded)

}

function modelLoaded() {

    classifier.classify(gotResult)
}

function gotResult(error, result) {

    if (error) {
        console.error(error)
    }
    else {
        console.log(result)

        r=Math.floor(Math.random() * 255) + 1
        g=Math.floor(Math.random() * 255) + 1
        b=Math.floor(Math.random() * 255) + 1

        document.getElementById("result_sound").style.color="rgb("+r+","+g+","+b+")"
        document.getElementById("result_accuracy").style.color="rgb("+r+","+g+","+b+")"
       document.getElementById("result_sound").innerHTML="I can hear " + result[0].label
       document.getElementById("result_accuracy").innerHTML="Accuracy " + (result[0].confidence * 100).toFixed(2) + "%"

       img1=document.getElementById("img1")
       img2=document.getElementById("img2")
       img3=document.getElementById("img3")
       img4=document.getElementById("img4")

       if(result[0].label=="Clapping"){

        img1.src="aliens-01.gif"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
       }
       else if(result[0].label=="Snap"){

        img1.src="aliens-01.png"
        img2.src="aliens-02.gif"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"

       }
       else if(result[0].label=="Bell"){

        img1.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.gif"
        img4.src="aliens-04.png"

       }

       else{

        img1.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.gif"

       }

    }

}

