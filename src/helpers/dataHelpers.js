const Cosmic = require('cosmicjs');
const api = new Cosmic()

export const bucket = api.bucket({
    slug: 'rainforest-production',
    read_key: 'CzA8naLranpgvocIzrOOz8ea9W6yZS1FDnF1pkO0ojlVbiOdXq'
})


export const getCosmicData = async (bucket, type, props) => {
    const data = await bucket.getObjects({
        query: {
            type: type
        },
        props: props
    })

    const result = await data.objects;

    return result
}

export const getDataForThisPage = (array, id, prop) => {

    if (array !== null && array !== undefined) {
        const filterResult = array.filter((page) => id === page.metadata[prop]);
       
        return filterResult[0];
    }
}