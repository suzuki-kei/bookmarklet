/**
 *
 * 現在開いている Google ドキュメントをコピーする.
 *
 */

(function(){
    var url = location.href;
    var url = url.replace(/^(https:\/\/docs\.google\.com\/[^/]+\/d\/[^/]+).*$/, "$1/copy");
    window.open(url, "_blank");
})()

