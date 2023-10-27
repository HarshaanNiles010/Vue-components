var names = ['Carl Sagan', 'Albert Einstein', 'Fredrich Gauss', 'Carl Jung', 'Stephen Hawking', 'Max Plank'];
const getPosts = (number) =>{
    let ret = [];
    for (var i = 0; i < number; i++){
        ret.push({
            author: names[i % names.length],
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus felis nec mauris aliquam, ac interdum leo volutpat. Nam condimentum semper elit id aliquet'
        })
    }
    return ret
}

export default getPosts
