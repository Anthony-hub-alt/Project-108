function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true });
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/W-b_g8DqI/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}