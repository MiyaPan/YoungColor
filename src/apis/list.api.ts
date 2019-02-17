function getXHRPromise (method: string, url: string, params?: any) {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            }
        };
        xhr.open(method, url, true);
        if(method === 'POST'){
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        method === 'POST' ? xhr.send(JSON.stringify(params)) : xhr.send();
    })
}

function getImageList (): Promise<any> {
    return getXHRPromise('GET', '/image-list');
}

function getProjectList (params:object): Promise<any> {
    return getXHRPromise('POST', '/project-list', params);
}

function getProjectDetail (id: string): Promise<any> {
    return getXHRPromise('GET', '/project/detail/' + id);
}

export default {
    getImageList,
    getProjectList,
    getProjectDetail
}