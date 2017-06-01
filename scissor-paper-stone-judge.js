let p2 = 0
let p1 = 0
radio.onDataPacketReceived(({receivedString: player, receivedNumber: value}) => {
    if (player == "ryan") {
        p1 = value
    } else {
        p2 = value
    }
})
basic.forever(() => {
    if ((p1 + 1) % 3 == p2) {
        basic.showString("moses wins!")
    } else {
        if ((p2 + 1) % 3 == p1) {
            basic.showString("ryan wins!")
        } else {
            basic.showString("draw!")
        }
    }
})
radio.setGroup(1)
p1 = 0
p2 = 0
