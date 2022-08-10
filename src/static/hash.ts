import { getItem, setItem } from "localforage";
import * as hashmap from './hash.map';

export let HashMap = async (): Promise<Object | any> => {
    let localMap = await getItem('hash');
    if (localMap == null) {
        let map = await setItem('hash', hashmap.default);
        return map;
    }
    else {
        return localMap;
    }
}