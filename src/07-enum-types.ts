// 枚举(Enum)

export {};

// const PostStatus = {
//   Draft: 0,
//   Unpublished: 1,
//   Published: 2,
// };

const enum PostStatus {
  Draft = 0,
  Unpublished = 1,
  Published = 2,
}

const post = {
  title: "hello",
  content: "geyifeng",
  status: PostStatus.Draft,
};
