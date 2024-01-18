/**
 *
 * Amazon の視聴履歴ページの「視聴履歴からエピソードを削除する」をクリックする.
 *
 */

(function(){
    text = "視聴履歴からエピソードを削除する"
    elements = Array.from(document.querySelectorAll("button")).filter(x => x.innerText == text)
    elements.forEach(x => x.click())
})()

