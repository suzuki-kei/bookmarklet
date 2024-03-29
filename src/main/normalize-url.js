/**
 *
 * Amazon の商品ページなどの URL を正規化する.
 *
 * 具体例:
 *
 *     https://www.amazon.co.jp/XXXXX/dp/B07FQ4DJ7X?tag=xxx&ref=xxx
 *     -> https://www.amazon.co.jp/dp/B07FQ4DJ7X
 *
 *     https://www.amazon.co.jp/dp/4814400098/ref=xx_xx_x_xx_xx_xxxxxxxxxxxxxxxxxxxx
 *     -> https://www.amazon.co.jp/dp/4814400098
 *
 *     https://www.amazon.co.jp/gp/product/B07FQ4DJ7X?tag=xxx&ref=xxx
 *     -> https://www.amazon.co.jp/dp/B07FQ4DJ7X
 *
 *     https://www.amazon.co.jp/o/ASIN/B07FQ4DJ7X?tag=xxx&ref=xxx
 *     -> https://www.amazon.co.jp/dp/B07FQ4DJ7X
 *
 *     https://www.amazon.co.jp/exec/obidos/ASIN/B07FQ4DJ7X?tag=xxx&ref=xxx
 *     -> https://www.amazon.co.jp/dp/B07FQ4DJ7X
 *
 *     https://www.amazon.co.jp/XXXXX/product-reviews/B09FJQZ7Q3?reviewerType=xxx
 *     -> https://www.amazon.co.jp/product-reviews/B09FJQZ7Q3
 *
 *     https://twitter.com/suzuki6b6569/status/1480061968547725316?s=21
 *     -> https://twitter.com/suzuki6b6569/status/1480061968547725316
 *
 */

(function(){
    url = location.href
    url = url.replace(/^(https:\/\/www\.amazon\.co\.jp)\/(?:.*\/?)dp\/([0-9a-zA-Z]+).*$/, "$1/dp/$2")
    url = url.replace(/^(https:\/\/www\.amazon\.co\.jp)\/o\/ASIN\/([0-9a-zA-Z]+).*$/, "$1/dp/$2")
    url = url.replace(/^(https:\/\/www\.amazon\.co\.jp)\/gp\/product\/([0-9a-zA-Z]+).*$/, "$1/dp/$2")
    url = url.replace(/^(https:\/\/www\.amazon\.co\.jp)\/exec\/obidos\/ASIN\/([0-9a-zA-Z]+).*$/, "$1/dp/$2")
    url = url.replace(/^(https:\/\/www\.amazon\.co\.jp)\/(?:.*\/)product-reviews\/([0-9a-zA-Z]+).*$/, "$1/product-reviews/$2")
    url = url.replace(/^(https:\/\/twitter\.com\/[-_0-9a-zA-Z]+\/status\/[0-9]+).*$/, "$1")
    url = url.replace(/^(https:\/\/qiita\.com\/[-_0-9a-zA-Z]+\/items\/[0-9a-zA-Z]+).*$/, "$1")
    location.href = url;
})()

