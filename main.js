function setup() {
    canvas=createCanvas(900,600)
}
var SpeechRecognition=window.webkitSpeechRecognition
recognition=new SpeechRecognition()
x=0
y=0
draw_apple=""
function start() {
    document.getElementById("status").innerHTML="System Is Listening To You Please Speak"
    recognition.start()
}
recognition.onresult=function (event) {
    console.log(event)
        content=event.results[0][0].transcript
        console.log(content)
        document.getElementById("status").innerHtml="System has Recognised The Speech as "+content
        if(content=="apple"){
            x=Math.floor(Math.random()*900)
            y=Math.floor(Math.random()*600)
            document.getElementById("status").innerHtml="Started Drawing Apple "
            draw_apple="set"
        }
}
function draw() {
    console.log(x,y)
    if(draw_apple=="set") {
        radius=Math.floor(Math.random()*100)
        circle(x,y,radius)
        draw_apple=""
    }
}