const imageUrlCreation = (file) => {
    const image = require(`../assets/${file}`);
    return image;
};
export default imageUrlCreation;