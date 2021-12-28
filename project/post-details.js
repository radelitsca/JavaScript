let post = localStorage.getItem('post');
let postId = JSON.parse(post);
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(value => {
        let postWrap = document.createElement('div');
        postWrap.style.width = '50%';
        document.body.style.background = 'silver';
        postWrap.style.margin = '5%';
        for (const item in value) {
            let post = document.createElement('div');
            post.innerHTML = `<b>${item}</b>: ${value[item]}`;
            postWrap.appendChild(post);
        }
        document.body.appendChild(postWrap);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(value => {
                let commentWrap = document.createElement('div');
                commentWrap.style.display = 'grid';
                commentWrap.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
                document.body.style.margin = '0px';
                for (const element of value) {
                    let wrapper = document.createElement('div');
                    wrapper.style.background = 'gold';
                    wrapper.style.margin = '5px';
                    for (const item in element) {
                        let comment = document.createElement('div');
                        comment.innerHTML = `<b>${item}</b>: ${element[item]}`;
                        wrapper.appendChild(comment);
                        commentWrap.append(wrapper);
                    }
                }
                document.body.appendChild(commentWrap);
            })
    })
