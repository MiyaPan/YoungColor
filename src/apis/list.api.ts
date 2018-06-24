function getList (url): Promise<any> {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            xhr.status === 200 ? resolve(xhr.response) : reject(xhr.status);
        };
        xhr.send();
    })
}

export default {
    getList
}