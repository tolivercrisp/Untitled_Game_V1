const canvas = document.querySelector('canvas');

// resize canvas element
canvas.width = 1024
canvas.height = 576

// canvas context
const c = canvas.getContext('2d')

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

// variable of underworld_map.png
const image = new Image()
image.src = './tiled/underworld_map.png'

// shows the image only once it has loaded
image.onload = () => {
    // adjusts zoomed image to the center
    c.drawImage(image, -1390, -1025)
}




