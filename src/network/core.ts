import { clear, getItem, setItem } from "localforage";
import { exFunc } from "../element";
import { HashMap } from "../static/hash";
import * as hashlist from '../static/hash.pages';

export interface loadType {
    'pages': string,
    'assest': string,
    'module': string,
}

export let Init = async (): Promise<void> => {
    let localVersion = await getItem('version');
    let onlineVersion = await (await fetch('./static/version.txt')).text();
    if (!(localVersion as unknown as string === onlineVersion)) {
        console.log('clear');
        clear(err => {
            if (err) {
                Init();
            }
            else {
                setItem('version', onlineVersion);
            }
        })
    }
}

const root = './static';
const hashList: Array<string> = hashlist.default;

export let load = async (url: string[], loader: keyof loadType, callback?: { (data: string): void }): Promise<string> => {
    const hash = await HashMap();
    let Furl: string = root;
    let Lurl: any = hash.root.static;
    let Iurl: Array<string> = [];
    let Uurls: Array<string> = [];
    let Uurl: string;

    let doCallback = async (data: string, itemHash: string): Promise<string> => {
        if (callback) {
            callback(data);
            exFunc(Lurl);
        }
        return data;
    }

    url.forEach((value, index, array) => {
        if (typeof (Lurl) !== 'string' && value in Lurl) {
            Furl = `${Furl}/${value}`;
            Lurl = Lurl[value];
            Uurls.push(value);
        }
        else {
            Iurl.push(value);
        }
    })
    Uurl = Uurls.join('-');

    console.log(Iurl, Uurl);

    if (loader == 'pages' && !hashList.includes(window.location.hash.slice(1))) {
        window.location.hash = 'pages-Home.html';
        return await load(window.location.hash.slice(1).split('-'), 'pages', callback);
    }
    else {
        let localData = await getItem(Lurl) as string;
        if (localData == null) {
            let Fetch = await fetch(Furl);
            let fetchData = await Fetch.text();
            if (Fetch.status == 200) {
                setItem(Lurl, fetchData);
                return doCallback(fetchData, Lurl);
            }
            else {
                return doCallback(fetchData, Lurl);
            }
        }
        else {
            return doCallback(localData, Lurl);
        }
    }
}