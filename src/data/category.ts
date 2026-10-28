export interface CategoryPage {
  id: string;
  path: string;
  title: string;
  headline: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  imageNote: string;
  introTitle: string;
  introduction: string[];
  points: string[][];
  linksTitle: string;
  links: { title: string; description: string; href: string }[];
}
