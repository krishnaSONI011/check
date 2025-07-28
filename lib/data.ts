interface Service {
  id: number;
  attributes: {
    url: string;
    name: string;
    short_desc: string;
    long_desc: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface RouteProps {
  href: string;
  label: string;
}

interface BlogCardProps {
  title: string;
  image: string;
  description: string;
  url: string;
}

interface BlogSectionProps {
  cards: BlogCardProps[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  link: string;
}

export type { BlogSectionProps, BlogCardProps, RouteProps };
export type { Service };
