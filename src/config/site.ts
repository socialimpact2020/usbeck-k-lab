export const urls = {
  home: "/",
  waytocome: "/waytocome",
  aboutus: "/aboutus",
  notice: "/boards/notice",
  news: "/boards/news",
  programs: "/programs",
  sw: "/programs/sw",
  hw: "/programs/hw",
  ot: "/programs/ot",
  dashboard: "/dashboard",
  dashboardFooter: "/dashboard/footer",
  dashboardBoards: "/dashboard/boards",
  dashboardPost: "/dashboard/post",
  dashboardNews: "/dashboard/news",
  dashboardSW: "/dashboard/sw",
  dashboardHW: "/dashboard/hw",
  dashboardEducationNew: "/dashboard/edu/new",
  dashboardBanners: "/dashboard/banners",
  dashboardBoardBanners: "/dashboard/boardBanners",
} as const;

export type UrlKeys = keyof typeof urls;
