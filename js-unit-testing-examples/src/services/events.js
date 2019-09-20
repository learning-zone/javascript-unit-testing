import fakeData from '../data/fakeData';

const getAll = () => {
    return Promise.resolve(fakeData.events);
};

export {
    getAll
};
