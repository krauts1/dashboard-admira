const areAllPropertiesEmpty = (obj) => {
    return Object.values(obj).every(value => {
        return value === null || 
               value === undefined || 
               value === "" || 
               value === 0 || 
               value === false || 
               (Array.isArray(value) && value.length === 0) || 
               (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0);
    });
}

export {
    areAllPropertiesEmpty
};
