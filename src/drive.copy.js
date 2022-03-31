/**
 *
 * 現在開いている Google ドキュメントをコピーする.
 *
 */

(function(){
    var url = location.href;
    var url = url.replace(/^(https:\/\/docs\.google\.com\/[a-zA-Z0-9]+\/d\/[a-zA-Z0-9]+).*$/, "$1/copy");
    window.open(url, "_blank");
})()

