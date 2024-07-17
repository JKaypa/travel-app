const Method = {
  POST: "Post",
  PUT: "Put",
  DELETE: "Delete",
} as const;

const Content = {
  JSON: "application/json",
} as const;

export { Content, Method };
