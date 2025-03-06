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

    if (touchValue > 600 && touchValue < 650) {
        basic.showIcon(IconNames.Yes)
        music.play(music.stringPlayable("C C5 C C5 C C5 C C5 ", 120), music.PlaybackMode.UntilDone)
    } else if (touchValue > 650 && touchValue < 660) {
        basic.showIcon(IconNames.Happy)
        music.play(music.stringPlayable("- D D D D D D - ", 120), music.PlaybackMode.UntilDone)
    } else if (touchValue > 660 && touchValue < 680) {
        basic.showIcon(IconNames.Heart)
        music.play(music.stringPlayable("- - - C D C D C ", 120), music.PlaybackMode.UntilDone)
    } else if (touchValue > 680 && touchValue < 750) {
        basic.showIcon(IconNames.SmallHeart)
        music.play(music.stringPlayable("D F G D E G D F ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No) 
    }

    basic.pause(100) 
    basic.clearScreen() 
})