// Write code that will generate 2 requests for different json files (data.json, data2.json).
//
//     Example for file data.json:
//
// {
//     "children": ["Jack","Jacky","Alexandr"]
// }
// Example for file data2.json:
//
// {
//     "children": ["Anna","Ivan","Alena"]
// }
// It is necessary to join the children arrays from the two received objects and output the result to the console.
//
//     Console output result:
//
//     ["Jack","Jacky","Alexandr","Anna","Ivan","Alena"]


const parse = (data) => JSON.parse(data);

const xml = new XMLHttpRequest();
xml.open('GET', 'requests/data.json');
xml.send();

const xml2 = new XMLHttpRequest();
xml2.open('GET', 'requests/data2.json');
xml2.send();

xml.addEventListener("readystatechange", () => {
    if (xml.readyState === xml.DONE && xml.status === 200) {
        const data = parse(xml.responseText);
        const children = data.children;
        xml2.addEventListener("readystatechange", () => {
            if (xml2.readyState === xml2.DONE && xml2.status === 200) {
                const data2 = parse(xml2.responseText);
                const children2 = data2.children;
                const result = children.concat(children2);
                console.log(result);
            }
        })
    }
})