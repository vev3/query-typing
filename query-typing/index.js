const handleParameter = (parameter) => {

    /*
    *   Recursive call for each element if parameter is array
    */
    if (Array.isArray(parameter)) {
        return parameter.map(element => handleParameter(element));
    }

    /*
    *   Boolean test
    */
    if (parameter === 'true' || parameter === 'false') {
        return parameter === 'true';
    }

    /*
    *   Numeric test
    */
    const numerical = parseFloat(parameter);
    if (!isNaN(numerical)) return numerical;

    return parameter;
};

const queryTyping = ({query}, res, next) => {

    Object.keys(query).forEach(key => {
        query[key] = handleParameter(query[key]);
    });

    next();
};

module.exports = queryTyping;
