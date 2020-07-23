const prettierTitle = (title) => {
    title = title.toLowerCase();

    if (title.indexOf("&#8220;") !== -1) title = title.replace(/&#8220;/g, `"`);
    if (title.indexOf("&#8221;") !== -1) title = title.replace(/&#8221;/g, `"`);
    if (title.indexOf("&#8211;") !== -1) title = title.replace(/&#8211;/g, `-`);
    
    return `${title[0].toUpperCase()}${title.slice(1)}`; 
}
 
export default prettierTitle;