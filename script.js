const getData = (url, cb) => {
    const dataRequest = new XMLHttpRequest();
    dataRequest.open('GET', url);
    dataRequest.send();

    dataRequest.addEventListener('readystatechange', () => {
        if (dataRequest.readyState === 4) {
            const data = parse(dataRequest.response);
            cb(data);
        }
    });
};

const parse = (data) => JSON.parse(data);

let data = null;
getData('./data.json', (jsonData) => {
    data = jsonData;
    processData();
});

let data2 = null;
getData('./data2.json', (jsonData) => {
    data2 = jsonData;
    processData();
});

const processData = () => {
    if (data && data2) {
        const concatedData = data.children.concat(data2.children);
        console.log(concatedData);
    }
};
