export interface State {
  currentPage: number;
  search: string;
}

export interface ISearchForm {
  search: string;
}

export interface IResponsePosts {
  posts: {
    id: number;
    type: string;
    title: string;
    content: string;
    views: number;
    createdAt: Date | string | number;
    updatedAt: Date | string | number;
  }[];
  totalPage: number;
}
