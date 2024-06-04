import { BlogModel } from "@/components/shared/ui/models/blog.model";

export interface BlogIntroPropsModel {
  title: string;
  description: string;
}

export interface BlogListCardPropsModel {
  blogPost: BlogModel;
  index: number;
}