const canvas = document.querySelector('canvas');

// resize canvas element
canvas.width = 1024
canvas.height = 576

// canvas context
const c = canvas.getContext('2d')

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

// map load
const image = new Image()
image.src = './tiled/underworld_map.png'

// player character load
const playerImage = new Image()
playerImage.src = './Heavy_Knight/Heavy_Knight_Non-Combat_Animations.png'

// shows the image only once it has loaded
image.onload = () => {
    // adjusts zoomed image to the center
    c.drawImage(image, -1390, -1025)
    c.drawImage(playerImage, canvas.width / 2 - playerImage.width / 2, canvas.height / 2 - playerImage.height / 2)
}






