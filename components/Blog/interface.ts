interface BlogType {
    id: number;
    date_gmt: string;
    slug: string;
    link: string;
    title: {
      rendered: string;
    };
    _links: {
      "wp:featuredmedia": [
        {
          href: string;
        }
      ];
    };
    image: any;
  }


export {BlogType}