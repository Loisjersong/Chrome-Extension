// window.onload = function() {
//     // const API_URL = 'https://copywritely.com/tools/copywritely/create_new_task_from_plugin';
//     const API_URL = 'https://smallseotools.com/plagiarism-checker/';

//     let msgBlock = document.getElementById('main');

//     document.querySelectorAll('[data-locale]').forEach(elem => {
//         elem.innerText = chrome.i18n.getMessage(elem.dataset.locale)
//     });

//     chrome.tabs.query({
//         active: true,
//         lastFocusedWindow: true
//     }, function(tabs) {
//         let tabUrl = tabs[0].url;

//         if (!validURL(tabUrl)) {
//             msgBlock.innerText = chrome.i18n.getMessage('fail_url_key') ;
//             msgBlock.classList.add("error");
//             setTimeout(() => {
//                 window.close();
//             }, 2000);
//             return;
//         }

//         let data = {
//             'url' : tabUrl
//         };

//         const url = API_URL + '?' + encodeQueryData(data);

//         chrome.tabs.create({ url: url });
//     });
// };

// // this functions checks if the URL is valid
// function validURL(str) {
//     let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//         '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
//     return !!pattern.test(str);
// }


// // this function gets all the content of the webpage
// function encodeQueryData(data) {
//     const ret = [];
//     for (let d in data)
//         ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
//     return ret.join('&');
// }


window.onload = function() {
    // const API_URL = 'https://copywritely.com/tools/copywritely/create_new_task_from_plugin';
    const API_URL = 'https://smallseotools.com/plagiarism-checker/';

    let msgBlock = document.getElementById('main');

    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {

        const url = API_URL;

        chrome.tabs.create({ url: url });
    });
};
