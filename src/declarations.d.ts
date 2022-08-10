declare module "*.pug" {
    export default function templateFn(locals: object): string
}

declare module "*.json" {
    const jsonValue: any;
    export default jsonValue;
}