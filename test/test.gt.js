const assert = require("assert")
const fs = require("fs")

function gt() {
    eval(fs.readFileSync("./src/gt.js", "utf-8"))
}

describe("gt", () => {

    beforeEach(() => {
        global.window = {location: {href: null}}
        global.location = global.window.location
    })

    const tests = [
        {
            url: "https://example.com",
            expected: "https://translate.google.com/translate?sl=en&tl=ja&u=https://example.com",
        },
    ]
    tests.forEach(({url, expected}, i) => {
        it("#" + i, () => {
            global.window.location.href = url
            gt()
            assert.equal(expected, global.window.location.href)
        })
    })

})

