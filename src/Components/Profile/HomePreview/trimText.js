function trimText(text, limit){
    if(text.length <= limit){
        return text;
    }

    const trimmed = text.substring(0, limit);
    return `${trimmed}...`;
}

export default trimText;