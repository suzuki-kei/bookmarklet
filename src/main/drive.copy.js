/**
 *
 * 現在開いている Google ドキュメントをコピーする.
 *
 */

(function(){
    var url = location.href
    var url = url.replace(/^(https:\/\/docs\.google\.com\/[^/]+\/d\/[^/]+).*$/, "$1/copy")
    if (url !== location.href) {
        window.open(url, "_blank")
    }
})()

