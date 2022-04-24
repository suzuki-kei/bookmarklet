const assert = require("assert")
const fs = require("fs")

function normalize_url() {
    eval(fs.readFileSync("./src/normalize-url.js", "utf-8"))
}

describe("normalize-url", () => {

    beforeEach(() => {
        global.window = {location: {href: null}}
        global.location = global.window.location
    })

    const tests = [
        {
            url: "https://example.com",
            expected: "https://example.com",
        },
        {
            url: "https://www.amazon.co.jp/XXXXX/dp/B07FQ4DJ7X?tag=xxx&ref=xxx",
            expected: "https://www.amazon.co.jp/dp/B07FQ4DJ7X",
        },
        {
            url: "https://www.amazon.co.jp/gp/product/B07FQ4DJ7X?tag=xxx&ref=xxx",
            expected: "https://www.amazon.co.jp/dp/B07FQ4DJ7X",
        },
        {
            url: "https://www.amazon.co.jp/o/ASIN/B07FQ4DJ7X?tag=xxx&ref=xxx",
            expected: "https://www.amazon.co.jp/dp/B07FQ4DJ7X",
        },
        {
            url: "https://www.amazon.co.jp/exec/obidos/ASIN/B07FQ4DJ7X?tag=xxx&ref=xxx",
            expected: "https://www.amazon.co.jp/dp/B07FQ4DJ7X",
        },
        {
            url: "https://www.amazon.co.jp/XXXXX/product-reviews/B09FJQZ7Q3?reviewerType=xxx",
            expected: "https://www.amazon.co.jp/product-reviews/B09FJQZ7Q3",
        },
        {
            url: "https://twitter.com/suzuki6b6569/status/1480061968547725316?s=21",
            expected: "https://twitter.com/suzuki6b6569/status/1480061968547725316",
        },
        {
            url: "https://www.monotaro.com/g/00542161/?t.q=%E3%82%B3%E3%83%94%E3%83%BC%E7%94%A8%E7%B4%99",
            expected: "https://www.monotaro.com/g/00542161/",
        },
    ]
    tests.forEach(({url, expected}, i) => {
        it("#" + i, () => {
            global.window.location.href = url
            normalize_url()
            assert.equal(expected, global.window.location.href)
        })
    })

})

