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
    if (setupMode == 0) {
        emergencyStop = 0
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
        for (let index = 0; index < breatheCycles; index++) {
            if (emergencyStop == 0) {
                breatheCycle()
            } else {
                break;
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (setupMode == 0) {
        setupMode = 1
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        basic.clearScreen()
    } else {
        setupMode = 0
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
    }
})
function beatingHeart () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (setupMode == 0) {
        emergencyStop = 1
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    }
})
let breatheCycles = 0
let breatheOutHold = 0
let beatheInHold = 0
let breatheOutSpeed = 0
let breatheInSpeed = 0
let breatheOutTime = 0
let breatheInTime = 0
let setupMode = 0
let emergencyStop = 0
beatingHeart()
emergencyStop = 0
setupMode = 0
breatheInTime = 2
breatheOutTime = 1
breatheInSpeed = 100
breatheOutSpeed = 10
beatheInHold = 1.8
breatheOutHold = 1
breatheCycles = 2
basic.pause(500)
basic.clearScreen()
