export const extractNumberFromString = string => {
    let regex = /\d+/g;

    return Number(string.match(regex));
}

export function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
}