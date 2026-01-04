/**
 *
 * X (旧 Twitter) の "興味関心" ページにおいて全てのチェックを外す.
 *
 */

(() => {
    var target_url = "https://x.com/settings/your_twitter_data/twitter_interests"
    if (window.location.href === target_url) {
        document.querySelectorAll("input[type='checkbox'][checked]").forEach(checkbox => checkbox.click())
    } else {
        alert(`Not a target URL: target_url=${target_url}`)
    }
})()

