var randomNo = Math.floor((Math.random()*array1.length)+1);
Element_of_array = array1[randomNo];
console.log(quickDrawDataSet[randomNumber]);
sketch = quickDrawDataSet[randomNumber];
document.getElementById('sketchName').innerHTML = 'Esboço a ser desenhado: ' + sketch;

var timerCounter = 0;
var timerCheck = "";
var drawSketch = "";
var answerHolder= "";
var score = 0;