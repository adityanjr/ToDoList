exports.getDate = () => {  //short for module.exports
    
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("hi-IN", options);
}

exports.getDay = () => {
    
    const today = new Date();
    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("hi-IN", options);
}