import images from "./images";

const wines = [
    {
        title: 'Chapel Hill Shiraz',
        price: '$56',
        tags: 'AU | Bottle',
    },
    {
        title: 'Catena Malbee',
        price: '$59',
        tags: 'AU | Bottle',
    },
    {
        title: 'La Vieillw Rose',
        price: '$44',
        tags: 'FR | 750 ml',
    },
    {
        title: 'Rhino Pale Ale',
        price: '$31',
        tags: 'CA | 750 ml',
    },
    {
        title: 'Irish Guinness',
        price: '$26',
        tags: 'IE | 750 ml',
    },
];

const cocktals = [
    {
        title: 'Aparol Spritz',
        price: '$20',
        tags: 'Aparol | Villa Marchesi prosecco | soda | 30 ml',
    },
    {
        title: 'Dark "N" Stormy',
        price: '$16',
        tags: 'Dark rum | Ginger beer | Slice of lime',
    },
    {
        title: 'Daiquiri',
        price: '$10',
        tags: 'Rum | Citrus juice | Sugar',
    },
    {
        title: 'Negroni',
        price: '$26',
        tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
    },
];

const awards = [
    {
        imgUrl: images.award02,
        title: 'Bib Gourmond',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award01,
        title: 'Rising Star',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award05,
        title: 'AA Hospitality',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award03,
        title: 'Outstanding Chef',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    }, 
];

export default {wines, cocktals, awards};