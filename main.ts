let valor_dado = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        valor_dado = randint(1, 6)
    }
    basic.showNumber(valor_dado)
})
