input.onButtonPressed(Button.A, () => {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P8, 1023)
    pins.digitalWritePin(DigitalPin.P12, 0)
})
input.onButtonPressed(Button.B, () => {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
})
