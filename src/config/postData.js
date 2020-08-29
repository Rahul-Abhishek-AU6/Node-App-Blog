const posts = [];

export default {

    addPost: (post) => {

        console.log('Adding post...');

        const postData = {
            title: post.title,
            description: post.description
        }

        posts.push(postData);

        return postData;
    }
};
