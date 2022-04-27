//Redux interface
interface navState {
  blogRoutes: string;
}

interface blogState {
  page: number;
}

export interface rootState {
  nav: navState;
  blog: blogState;
}
