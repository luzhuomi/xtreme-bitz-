let item: Image = null
let i = 0
let t = 0
input.onGesture(Gesture.Shake, () => {
    t = input.temperature()
    basic.showNumber(t)
})
input.onButtonPressed(Button.A, () => {
    i = Math.random(4)
    item = images.createImage(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    items[i].showImage(0)
})
input.onButtonPressed(Button.B, () => {
    i = Math.random(101)
    basic.showNumber(i)
})
let items: Image[] = [
    images.createImage(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `),
    images.createImage(`
        . . # . .
        . # # # .
        . . # . .
        # # # # #
        . . # . .
        `),
    images.createImage(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `),
    images.createImage(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
]
