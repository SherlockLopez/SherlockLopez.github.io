import { HashMap } from "../static/hash";

export let eFunc = async () => {
    let hash = await HashMap();
    let funs: Object | any = {};

    funs[hash.root.static.modules['buttons.html']] = (): void => {
        (document.getElementById('afee2de5-9278-4c74-ba86-3e190ca39e8b') as HTMLElement).onclick = () => window.location.hash = 'pages-Home.html';
        (document.getElementById('8263f369-77ee-4a95-b786-89fd47ef12c7') as HTMLElement).onclick = () => window.location.hash = 'pages-Limited.html';
        (document.getElementById('eb27e947-d14c-4723-86db-70f8ed7791e8') as HTMLElement).onclick = () => window.location.hash = 'pages-Index.html';
    }

    funs[hash.root.static.pages['Home.html']] = (): void => {
        (document.getElementById('4cd179c9-2cb8-4818-87f7-245940c575ec') as HTMLElement).setAttribute('data-content', '13');
        (document.getElementById('637d1622-2f7b-4d20-897a-f1d3ef0018b0') as HTMLElement).setAttribute('data-content', '103');
    }

    return funs;
}

export let exFunc = async (elementId: string) => {
    const funs = await eFunc();
    if (elementId in funs) {
        funs[elementId]();
    }
}