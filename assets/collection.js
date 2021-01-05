const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sort_by = urlParams.get('sort_by')

if (sort_by) {
    const url = location.protocol + "//" + location.host + location.pathname + '?sort_by=' + sort_by;
    document.querySelector('.js-sort').value = url;
}