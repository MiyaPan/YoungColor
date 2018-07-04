function getImageList (): Promise<any> {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            }
        };
        xhr.open('GET', '/image-list', true);
        xhr.send();
    })
}

function getProjectList (): Promise<any> {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            }
        };
        xhr.open('GET', '/project-list', true);
        xhr.send();
    })
}

export default {
    getImageList,
    getProjectList
}