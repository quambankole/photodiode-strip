let touchValue = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    touchValue = pins.analogReadPin(AnalogPin.P0)
    if (touchValue > 600 && touchValue < 630) {
        basic.showIcon(IconNames.Yes)
        music.play(music.stringPlayable("C5 A B F A E A D ", 147), music.PlaybackMode.UntilDone)
    } else if (touchValue > 630 && touchValue < 660) {
        basic.showIcon(IconNames.Happy)
        music.play(music.stringPlayable("C E C F A F D C ", 120), music.PlaybackMode.UntilDone)
    } else if (touchValue > 660 && touchValue < 680) {
        basic.showIcon(IconNames.Heart)
        music.play(music.stringPlayable("C5 A G F E D C E ", 92), music.PlaybackMode.UntilDone)
    } else if (touchValue > 680 && touchValue < 750) {
        basic.showIcon(IconNames.SmallHeart)
        music.play(music.stringPlayable("C5 C5 A A E E G F ", 218), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(100)
})
