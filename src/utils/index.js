export const toGeoJson = (type, items, nameGenerator, coordinatesGenerator) => (items.map(item => ({
    type,
    geometry: {
        type: 'Point',
        coordinates: coordinatesGenerator(item),
    },
    properties: {
        message: nameGenerator(item),
    },
})));
