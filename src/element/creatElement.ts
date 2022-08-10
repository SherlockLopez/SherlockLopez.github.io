export let inputElement = (e: HTMLElement, tagName: keyof HTMLElementTagNameMap, classList?: string[]): HTMLElement => {
    let n = document.createElement(tagName);
    if (classList) {
        classList.forEach((value, index, array) => {
            n.classList.add(value);
        })
    }
    e.appendChild(n);
    return n;
}