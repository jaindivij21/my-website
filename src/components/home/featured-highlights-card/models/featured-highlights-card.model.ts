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

export interface FeaturedVideoModel {
  section_name: string;
  section_description: string;
  video: VideoModel;
}

interface VideoModel {
  url: string;
  title: string;
}

export interface FeaturedPrintModel {
  section_name: string;
  section_description: string;
  redirection_url: string;
  print: PrintModel;
}

interface PrintModel {
  image_src: string;
  image_alt: string;
}
