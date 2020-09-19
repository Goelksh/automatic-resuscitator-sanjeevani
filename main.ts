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
// Perform test setup for servo and gears without bag.
function variableSetupForWithoutBag () {
    breatheInTime = 1.2
    breatheOutTime = 1.7
    breatheInSpeed = 20
    breatheOutSpeed = 20
    beatheInHold = 1
    breatheOutHold = 0
    breatheCycles = 5
}
// Perform variable setup for tidal volume of 130ml.
function variableSetupFor130ml () {
    breatheInTime = 1
    breatheOutTime = 0.8
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = calculateHoldInTime()
    breatheOutHold = 0
    breatheCycles = 30
}
// Perform test setup for tidal volume of 325ml with 6.4volt.
function variableSetupForVolumeTest_325ml_64volt () {
    breatheInTime = 1.7
    breatheOutTime = 1.3
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = 0
    breatheOutHold = 0
    breatheCycles = 8
}
// Perform test setup to check air pressure using manometer.
function variableSetupForPressureTest () {
    breatheInTime = 2
    breatheOutTime = 1
    breatheInSpeed = 50
    breatheOutSpeed = 20
    beatheInHold = 2
    breatheOutHold = 0
    breatheCycles = 3
}
// in normal mode start the device, in setup mode change the RR
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
    } else {
        if (RR_BreathsPerMin >= 20) {
            RR_BreathsPerMin = 5
        } else {
            RR_BreathsPerMin += 1
        }
        basic.showNumber(RR_BreathsPerMin)
    }
})
function calculateHoldInTime () {
    OneBreathTime = 60 / RR_BreathsPerMin
    return OneBreathTime - (breatheInTime + breatheOutTime)
}
// Perform test setup for tidal volume of 130ml with 5.5volt.
function variableSetupForVolumeTest_130ml_55volt () {
    breatheInTime = 1
    breatheOutTime = 0.8
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = 0.2
    breatheOutHold = 0
    breatheCycles = 20
}
// Perform test setup for tidal volume of 260ml with 5.5volt.
function variableSetupForVolumeTest_260ml_55volt () {
    breatheInTime = 1.9
    breatheOutTime = 1.3
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = 0
    breatheOutHold = 0
    breatheCycles = 10
}
// Perform test setup for bag withour any load.
function variableSetupForWithBagNoLoad () {
    breatheInTime = 1.7
    breatheOutTime = 1.3
    breatheInSpeed = 35
    breatheOutSpeed = 20
    breatheCycles = 5
    beatheInHold = 1
    breatheOutHold = 0
}
// switch between setup mode and normal mode. Run setup function at the end of setup mode.
input.onButtonPressed(Button.AB, function () {
    if (flagSetupMode == 0) {
        flagSetupMode = 1
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        basic.clearScreen()
    } else {
        flagSetupMode = 0
        if (tidalVolume == 260) {
            variableSetupFor260ml()
        } else {
            variableSetupFor130ml()
        }
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
        basic.showString("Hin=" + beatheInHold)
    }
})
// display a beating heart for number of times
function beatingHeart (num: number) {
    for (let index = 0; index < num; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
}
// Perform variable setup for tidal volume of 260ml.
function variableSetupFor260ml () {
    breatheInTime = 1.9
    breatheOutTime = 1.3
    breatheInSpeed = 35
    breatheOutSpeed = 20
    beatheInHold = calculateHoldInTime()
    breatheOutHold = 0
    breatheCycles = 30
}
// in normal mode stop the device, in setup mode change the TV
input.onButtonPressed(Button.B, function () {
    if (flagSetupMode == 0) {
        flagEmergencyStop = 1
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (tidalVolume == 130) {
            tidalVolume = 260
            basic.showString("TV=260")
        } else {
            tidalVolume = 130
            basic.showString("TV=130")
        }
    }
})
let OneBreathTime = 0
let breatheCycles = 0
let breatheOutHold = 0
let breatheOutTime = 0
let breatheOutSpeed = 0
let beatheInHold = 0
let breatheInTime = 0
let breatheInSpeed = 0
let tidalVolume = 0
let RR_BreathsPerMin = 0
let flagSetupMode = 0
let flagEmergencyStop = 0
flagEmergencyStop = 0
flagSetupMode = 0
RR_BreathsPerMin = 5
tidalVolume = 130
beatingHeart(3)
variableSetupFor130ml()
