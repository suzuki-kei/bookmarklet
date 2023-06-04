const assert = require("assert")
const fs = require("fs")

function cyber_security_karuta() {
    html = fs.readFileSync("./src/main/cyber-security-karuta.html", "utf-8")
    javascript = html.replace(/^(?:.|\n)*<script[^>]*>\n*([^<]*?)\n*<\/script>(?:.|\n)*$/gi, "$1")
    eval(javascript)
}

describe("cyber-security-karuta", () => {

    beforeEach(() => {
        global.window = {location: {href: null}}
        global.location = global.window.location
    })

    it("#1", () => {
        cyber_security_karuta()
        assert.match(
            global.window.location.href,
            /https:\/\/www\.ipa\.go\.jp\/security\/otasuketai-pr\/assets\/img\/karuta\/[a-z]+\.png$/)
    })

})

