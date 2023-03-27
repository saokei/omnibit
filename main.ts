basic.showLeds(`
    # . # . #
    # . # . #
    # . # # #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    OmniBit.CarRun(OmniBit.enCarRun.MoveLeft, 255)
})
