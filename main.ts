namespace SpriteKind {
    export const SelectableCharacter = SpriteKind.create()
    export const Background = SpriteKind.create()
}
function show_character_picker2 () {
    scene.centerCameraAt(80, 60)
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        let gravity = 0
        value.ay = gravity
        value.setFlag(SpriteFlag.Invisible, true)
    }
    showCharacterScreen = true
    corni = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.SelectableCharacter)
    corni.z = 101
    corni.setPosition(32, 67)
    textSprite = textsprite.create("Choose Your Character:", 9, 10)
    textSprite.z = 101
    textSprite.setPosition(80, 29)
    giuseppe = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f 3 f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.SelectableCharacter)
    giuseppe.z = 101
    giuseppe.setPosition(73, 67)
    moo = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.SelectableCharacter)
    moo.z = 101
    moo.setPosition(126, 67)
    ourCharacters = [corni, giuseppe, moo]
    current_character_index = 1
    character_selector_box = sprites.create(img`
        ffffffffffffffffffffffffffffffffffff
        f2222222222222222222222222222222222f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2................................2f
        f2222222222222222222222222222222222f
        ffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Background)
    character_selector_box.z = 101
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        thePlayer = sprites.create(currently_selected_character.image, SpriteKind.Player)
        thePlayer.setFlag(SpriteFlag.Invisible, false)
        scene.cameraFollowSprite(thePlayer)
        for (let value2 of sprites.allOfKind(SpriteKind.SelectableCharacter)) {
            value2.destroy()
        }
        for (let value3 of sprites.allOfKind(SpriteKind.Background)) {
            value3.destroy()
        }
        for (let value4 of sprites.allOfKind(SpriteKind.Text)) {
            value4.destroy()
        }
        controller.moveSprite(thePlayer, 100, 0)
        thePlayer.ay = 200
        showCharacterScreen = false
    } else {
        if (thePlayer.vy == 0) {
            thePlayer.vy = -120
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        current_character_index = (current_character_index + (ourCharacters.length - 1)) % ourCharacters.length
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        current_character_index = (current_character_index + 1) % ourCharacters.length
    }
})
spriteutils.createRenderable(100, function (screen2) {
    if (showCharacterScreen) {
        screen2.fill(1)
        currently_selected_character = ourCharacters[current_character_index]
        character_selector_box.setPosition(currently_selected_character.x, currently_selected_character.y)
    }
})
let currently_selected_character: Sprite = null
let thePlayer: Sprite = null
let character_selector_box: Sprite = null
let current_character_index = 0
let ourCharacters: Sprite[] = []
let moo: Sprite = null
let giuseppe: Sprite = null
let textSprite: TextSprite = null
let corni: Sprite = null
let showCharacterScreen = false
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(8)
show_character_picker2()
