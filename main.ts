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
function variableSetupForWithoutBag () {
    breatheInTime = 1.2
    breatheOutTime = 1.7
    breatheInSpeed = 20
    breatheOutSpeed = 20
    beatheInHold = 1
    breatheOutHold = 0
    breatheCycles = 5
}
function variableSetupFor130ml () {
    breatheInTime = 1
    breatheOutTime = 0.8
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = calculateHoldInTime()
    breatheOutHold = 0
    breatheCycles = 30
}
function variableSetupForVolumeTest_325ml_64volt () {
    breatheInTime = 1.7
    breatheOutTime = 1.3
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = 0
    breatheOutHold = 0
    breatheCycles = 8
}
function variableSetupForVolumeTest_260ml_55volt () {
    breatheInTime = 1.9
    breatheOutTime = 1.3
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = 0
    breatheOutHold = 0
    breatheCycles = 10
}
function variableSetupForPressureTest () {
    breatheInTime = 2
    breatheOutTime = 1
    breatheInSpeed = 50
    breatheOutSpeed = 20
    beatheInHold = 2
    breatheOutHold = 0
    breatheCycles = 3
}
input.onButtonPressed(Button.A, function () {
    if (flagSetupMode == 0) {
        flagEmergencyStop = 0
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
        for (let index = 0; index < breatheCycles; index++) {
            if (flagEmergencyStop == 0) {
                breatheCycle()
            } else {
                break;
            }
        }
    }
})
function calculateHoldInTime () {
    time_in_plus_out = breatheInTime + breatheOutTime
    OneBreathTime = 60 / RR_BreathsPerMin
    return OneBreathTime - time_in_plus_out
}
function variableSetupForWithBagNoLoad () {
    breatheInTime = 1.7
    breatheOutTime = 1.3
    breatheInSpeed = 35
    breatheOutSpeed = 20
    breatheCycles = 5
    beatheInHold = 1
    breatheOutHold = 0
}
input.onButtonPressed(Button.AB, function () {
    if (flagSetupMode == 0) {
        flagSetupMode = 1
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        basic.clearScreen()
    } else {
        flagSetupMode = 0
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
    }
})
function beatingHeart (num: number) {
    for (let index = 0; index < num; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
}
function variableSetupFor260ml () {
    breatheInTime = 1.9
    breatheOutTime = 1.3
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = calculateHoldInTime()
    breatheOutHold = 0
    breatheCycles = 30
}
input.onButtonPressed(Button.B, function () {
    if (flagSetupMode == 0) {
        flagEmergencyStop = 1
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    }
})
function variableSetupForVolumeTest_130ml_55volt () {
    breatheInTime = 1
    breatheOutTime = 0.8
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = 0.2
    breatheOutHold = 0
    breatheCycles = 20
}
let OneBreathTime = 0
let time_in_plus_out = 0
let breatheCycles = 0
let breatheOutHold = 0
let breatheOutTime = 0
let breatheOutSpeed = 0
let beatheInHold = 0
let breatheInTime = 0
let breatheInSpeed = 0
let RR_BreathsPerMin = 0
let flagSetupMode = 0
let flagEmergencyStop = 0
flagEmergencyStop = 0
flagSetupMode = 0
RR_BreathsPerMin = 20
beatingHeart(3)
variableSetupFor130ml()
