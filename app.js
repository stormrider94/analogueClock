const secondHand = document.getElementById('second-hand')
const minuteHand = document.getElementById('minute-hand')
const hourHand = document.getElementById('hour-hand')

function updateTime(){
    const date = new Date()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()
    const seconds_angle = seconds * 6 
    const minutes_angle = minutes * 6 
    const hours_angle = hours * 30 
    
    // move seconds hand, minutes hand and hours hand 
    moveHand(secondHand,seconds_angle)
    moveHand(minuteHand,minutes_angle)
    moveHand(hourHand,hours_angle)

}

function moveHand(element,angle){
    element.style.setProperty('--rotate',angle)
}

setInterval(updateTime,1000)