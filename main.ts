let Lights_on = 0
input.onSound(DetectedSound.Loud, function () {
    Lights_on = 1
    if (Lights_on == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
