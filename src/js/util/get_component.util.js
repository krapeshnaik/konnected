import path from 'path';

const getComponent = chunkName => {
    let chunkPath = path.join('../', chunkName);
    console.log(chunkPath);

    return import ( /* webpackChunkName: "chunk" */ `${chunkPath}`)
        .then(component => {
            return component;
        })
        .catch(error => {
            console.log(error);
        });
}

export default getComponent;