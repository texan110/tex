input.onButtonPressed(Button.A, function () {
    if (true) {
        bullet.change(LedSpriteProperty.Y, 1)
    } else {
        basic.pause(800)
        bullet.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
    }
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    bullet.set(LedSpriteProperty.X, 0)
    bullet.move(1)
    basic.pause(100)
    bullet.move(1)
    basic.pause(100)
    bullet.move(1)
    basic.pause(100)
    bullet.move(1)
    basic.pause(100)
    bullet.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
    bullet.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        bullet.change(LedSpriteProperty.Y, -1)
    } else {
        bullet.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
        bullet.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
    }
    sprite.change(LedSpriteProperty.Y, -1)
})
let zomb5: game.LedSprite = null
let _5zomb = 0
let zomb3: game.LedSprite = null
let _3zomb = 0
let zomb2: game.LedSprite = null
let _2zomb = 0
let zomb1: game.LedSprite = null
let _1zomb = 0
let zomb4: game.LedSprite = null
let _4zomb = 0
let bullet: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 2)
bullet = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
basic.forever(function () {
    if (_4zomb == 1) {
        if (bullet.isTouching(zomb4)) {
            zomb4.delete()
        }
    }
})
basic.forever(function () {
    if (_1zomb == 1) {
        if (bullet.isTouching(zomb1)) {
            zomb1.delete()
        }
    }
})
basic.forever(function () {
    if (_2zomb == 1) {
        if (bullet.isTouching(zomb2)) {
            zomb2.delete()
        }
    }
})
basic.forever(function () {
    if (_3zomb == 1) {
        if (bullet.isTouching(zomb3)) {
            zomb3.delete()
        }
    }
})
basic.forever(function () {
    if (_5zomb == 1) {
        if (bullet.isTouching(zomb5)) {
            zomb5.delete()
        }
    }
})
basic.forever(function () {
    if (_3zomb == 1) {
        basic.pause(1500)
        zomb3.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb3.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb3.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb3.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
    }
})
basic.forever(function () {
    if (_2zomb == 1) {
        basic.pause(1500)
        zomb2.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb2.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb2.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb2.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
    }
})
basic.forever(function () {
    if (_1zomb == 1) {
        basic.pause(1500)
        zomb1.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb1.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb1.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb1.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
    }
})
basic.forever(function () {
    if (_5zomb == 1) {
        basic.pause(1500)
        zomb5.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb5.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb5.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb5.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
    }
})
basic.forever(function () {
    if (_4zomb == 1) {
        basic.pause(1500)
        zomb4.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb4.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb4.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
        zomb4.change(LedSpriteProperty.X, -1)
        basic.pause(1500)
    }
})
basic.forever(function () {
    basic.pause(2000)
    if (Math.randomBoolean()) {
        zomb1 = game.createSprite(4, 0)
        _1zomb += 1
        basic.pause(5000)
        _1zomb += -1
    } else if (Math.randomBoolean()) {
        zomb2 = game.createSprite(4, 1)
        _2zomb += 1
        basic.pause(5000)
        _2zomb += -1
    } else if (Math.randomBoolean()) {
        zomb3 = game.createSprite(4, 2)
        _3zomb += 1
        basic.pause(5000)
        _3zomb += -1
    } else if (Math.randomBoolean()) {
        zomb4 = game.createSprite(4, 3)
        _4zomb += 1
        basic.pause(5000)
        _4zomb += -1
    } else if (Math.randomBoolean()) {
        zomb5 = game.createSprite(4, 4)
        _5zomb += 1
        basic.pause(5000)
        _5zomb += -1
    }
})
basic.forever(function () {
    basic.pause(3000)
    if (Math.randomBoolean()) {
        zomb5 = game.createSprite(4, 4)
        _5zomb += 1
        basic.pause(5000)
        _5zomb += -1
    } else if (Math.randomBoolean()) {
        zomb4 = game.createSprite(4, 3)
        _4zomb += 1
        basic.pause(5000)
        _4zomb += -1
    } else if (Math.randomBoolean()) {
        zomb3 = game.createSprite(4, 2)
        _3zomb += 1
        basic.pause(5000)
        _3zomb += -1
    } else if (Math.randomBoolean()) {
        zomb2 = game.createSprite(4, 1)
        _2zomb += 1
        basic.pause(5000)
        _2zomb += -1
    } else if (Math.randomBoolean()) {
        zomb1 = game.createSprite(4, 0)
        _1zomb += 1
        basic.pause(5000)
        _1zomb += -1
    }
})
