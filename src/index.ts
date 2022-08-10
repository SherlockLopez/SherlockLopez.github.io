import { inputElement } from "./element/creatElement";
import { Init, load } from "./network/core";

let root: HTMLElement = document.getElementById('root') as HTMLElement;
let App: HTMLElement = inputElement(root, 'div', ['container']);
let Main: HTMLElement = inputElement(root, 'div', ['container']);
App.id = 'titleBar';
Main.id = 'mainContent';

App.setAttribute('data', '你好')

let ld = async (): Promise<void> => {
    await Init();

    load(['modules', 'buttons.html'], 'module', x => {
        App.innerHTML = x;
    })
    
    load(window.location.hash.slice(1).split('-'), 'pages', x => {
        Main.innerHTML = x
    })
    
    window.addEventListener('hashchange', (ev) => {
        load(window.location.hash.slice(1).split('-'), 'pages', x => {
            Main.innerHTML = x
        })
    })
}

ld();