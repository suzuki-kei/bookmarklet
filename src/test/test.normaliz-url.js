const assert = require("assert")
const fs = require("fs")

function normalize_url() {
    eval(fs.readFileSync("./src/main/normalize-url.js", "utf-8"))
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
            url: "https://www.amazon.co.jp/dp/4814400098/ref=xx_xx_x_xx_xx_xxxxxxxxxxxxxxxxxxxx",
            expected: "https://www.amazon.co.jp/dp/4814400098",
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
            url: "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/X000X0X0.pdf?sv=0000-00-00&st=0000-00-00X00%3A35%3A10Z&se=0000-00-00T00%3A00%3A00Z&sr=x&sp=xx&sig=00xxXxxXXXxx0XX0xxxxxXXXxXXXXXx0XxXXXX0XX0X%3D",
            expected: "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/X000X0X0.pdf",
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

