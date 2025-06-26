/* eslint-disable @typescript-eslint/no-explicit-any */

const setPropety = (elem: HTMLElement, value: any, keys?: string) => {
    if (Object.isExtensible(value)) {
        for (const key in value) {
            if (Object.hasOwnProperty.call(value, key)) {
                const obValue = value[key];
                elem.style.setProperty(key, obValue);
            }
        }
    } else {
        elem.style.setProperty(keys!, value);
    }
}

export default setPropety;