function Reset_Goal () {
    goal = game.createSprite(randint(0, 4), randint(0, 4))
}
function Player_Movement () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        Player.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        Player.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        Player.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        Player.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
}
function Goal () {
    if (Player.isTouching(goal)) {
        goal.delete()
        Reset_Goal()
        game.addScore(1)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        joystickbit.Vibration_Motor(100)
    }
}
function Countdown_Start () {
    game.startCountdown(120000)
}
function Player_Set_Up () {
    Player = game.createSprite(2, 4)
    Player.set(LedSpriteProperty.Blink, 100)
    game.setScore(0)
}
let Player: game.LedSprite = null
let goal: game.LedSprite = null
Reset_Goal()
Player_Set_Up()
Countdown_Start()
basic.forever(function () {
    Player_Movement()
    Goal()
})
