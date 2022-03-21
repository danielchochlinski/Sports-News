
const useData = (posts, images) => {
  posts && posts.map((post, i) => {
    return {
      data: {
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
        url: images[i].url,
      },
    };
  });
};
export default useData;
