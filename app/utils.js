const removeHTMLelements = (HTMLcontent)=>{
    return HTMLcontent.replace(/(<([^>]+)>)/gi, "");
    }
    
    const mapText = (content)=>{
        let delimetedText = content.replace(/,/g, "");
    const array = (content.split(" ")).filter((word)=>word!=="");
    const map = {};
    for(let word of array){
        if(map[word]) map[word]++;
        else map[word]=1;
    }
    const result = [];
    for(let word in map){
        if(map[word]>1) result.push({word,frequency:map[word]});
    }
    return result
        }
    
    module.exports = {removeHTMLelements,mapText}