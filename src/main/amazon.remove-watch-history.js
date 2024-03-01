/**
 *
 * Amazon の視聴履歴ページにある, 視聴履歴を削除するリンクをクリックする.
 *
 */

(function(){
    pattern = /^(視聴履歴からエピソードを削除する|視聴履歴から映画を削除)$/
    elements = Array.from(document.querySelectorAll("button")).filter(x => pattern.test(x.innerText))
    elements.forEach(x => x.click())
})()

