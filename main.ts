// This function will create a full cycle of breathing.
function breatheCycle () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, breatheInSpeed)
    basic.pause(breatheInTime * 1000)
    ContinuousServo.turn_off_motor(DigitalPin.P0)
    basic.pause(beatheInHold * 1000)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, breatheOutSpeed)
    basic.pause(breatheOutTime * 1000)
    ContinuousServo.turn_off_motor(DigitalPin.P0)
    basic.pause(breatheOutHold * 1000)
}
input.onButtonPressed(Button.A, function () {
    emergencyStop = 0
    for (let index = 0; index < 10; index++) {
        if (emergencyStop == 0) {
            breatheCycle()
        } else {
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    emergencyStop = 1
})
// Heart on start shows that microbit started.
// Created variables for breathing time and speed.
let breatheOutHold = 0
let beatheInHold = 0
let breatheOutSpeed = 0
let breatheInSpeed = 0
let breatheOutTime = 0
let breatheInTime = 0
let emergencyStop = 0
basic.showIcon(IconNames.Heart)
emergencyStop = 0
breatheInTime = 2.2
breatheOutTime = 1.1
breatheInSpeed = 30
breatheOutSpeed = 30
beatheInHold = 1
breatheOutHold = 1
basic.pause(500)
basic.clearScreen()
