/**
 *
 * Google Drive のフォルダに含まれるファイル/フォルダ一覧を表示する.
 *
 */

(function(){
    if (location.href.startsWith("https://drive.google.com/drive/")) {
        const elements = Array.from(document.querySelectorAll("div.KL4NAf"))
        const names = elements.map(_ => _.innerText)

        const newWindow = window.open()
        const textarea = newWindow.document.createElement("textarea")
        textarea.setAttribute("style", "width: 100%; height: 100%")
        textarea.value = names.join("\r\n")
        newWindow.document.body.appendChild(textarea)
        textarea.select()
        textarea.focus()
    }
})()

