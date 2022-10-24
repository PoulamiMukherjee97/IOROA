const imageUrlCreation = (file) => {
    const image = require(`../assets/${file}`);
    return image;
};
export default imageUrlCreation;

export const pdfCreation = (file) => {
    const pdf = require(`../assets/${file}`);
    return pdf;
}

