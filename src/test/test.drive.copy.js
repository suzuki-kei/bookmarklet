const assert = require("assert")
const fs = require("fs")

function drive_copy() {
    eval(fs.readFileSync("./src/main/drive.copy.js", "utf-8"))
}

describe("drive.copy", () => {

    beforeEach(() => {
        global.window = {location: {href: null}}
        global.location = global.window.location
    })

    const tests = [
        {
            url: "https://docs.google.com/document/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/edit",
            expected: "https://docs.google.com/document/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/copy",
        },
        {
            url: "https://docs.google.com/document/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/edit#heading=h.xxxxxxxxxxxx",
            expected: "https://docs.google.com/document/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/copy",
        },
        {
            url: "https://docs.google.com/document/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/edit#heading=h.xxxxxxxxxxxx",
            expected: "https://docs.google.com/document/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/copy",
        },
        {
            url: "https://docs.google.com/spreadsheets/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/edit",
            expected: "https://docs.google.com/spreadsheets/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/copy",
        },
        {
            url: "https://docs.google.com/spreadsheets/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/edit#gid=xxxxxxxxxx",
            expected: "https://docs.google.com/spreadsheets/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/copy",
        },
        {
            url: "https://docs.google.com/presentation/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/edit",
            expected: "https://docs.google.com/presentation/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/copy",
        },
        {
            url: "https://docs.google.com/presentation/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/edit#slide=id.xxxxxxxxxxxxxxxxxx",
            expected: "https://docs.google.com/presentation/d/XXXXXXXXXX-xxxxxxxxxxxxxxxxx-000000000000000/copy",
        },
    ]

    tests.forEach(({url, expected}, i) => {
        it("#" + i, () => {
            global.window.location.href = url
            called_arguments = []
            global.window.open = function() { called_arguments = arguments }
            drive_copy()
            assert.equal(called_arguments[0], expected)
        })
    })

})

