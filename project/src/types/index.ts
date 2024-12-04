export interface NavItem {
  title: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}