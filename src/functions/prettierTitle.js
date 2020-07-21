const prettierTitle = (title) => {
    title = title.toLowerCase();
    return `${title[0].toUpperCase()}${title.slice(1)}`; 
}
 
export default prettierTitle;