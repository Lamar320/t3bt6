namespace SpriteKind {
    export const SelectableCharacter = SpriteKind.create()
    export const Background = SpriteKind.create()
}
let list = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let showCharacterScreen = 0
    if (showCharacterScreen) {
        let currently_selected_character: Image = null
        thePlayer = sprites.create(currently_selected_character, SpriteKind.Player)
        thePlayer.setFlag(SpriteFlag.Invisible, false)
        scene.cameraFollowSprite(thePlayer)
        for (let value2 of [0]) {
            sprites.destroy(value2)
        }
        for (let value3 of sprites.allOfKind(list)) {
        	
        }
    } else {
    	
    }
})
function show_character_picker () {
	
}
let thePlayer: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(8)
show_character_picker()
