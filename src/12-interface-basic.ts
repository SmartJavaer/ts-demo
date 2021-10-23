// 接口

export {};

interface Post {
  title: string;
  subtitle: string;
  readonly summary: string;
  content: string;
}

function printPost(post: Post) {
  console.log(post.title);
  console.log(post.content);
}

interface Cache {
  [prop: string]: string;
}

const cache: Cache = {};

cache.name = 'gezc'
cache.age = "desc"
