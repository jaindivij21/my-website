export interface FeaturedBlogModel {
  section_name: string;
  section_description: string;
  redirection_url: string;
  blog_post: BlogPostModel;
}

interface BlogPostModel {
  image_src: string;
  image_alt: string;
  published_at: string;
  published_by: string;
  read_time: string;
  title: string;
  description: string;
}
