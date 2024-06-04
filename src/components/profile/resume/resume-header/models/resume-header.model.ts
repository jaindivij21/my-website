import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface ResumeHeaderData {
  image: {
    src: string;
    alt: string;
  };
  tagline: string;
  description: ResumeHeaderDescriptionItem[];
}

interface ResumeHeaderDescriptionItem {
  text: string;
}
