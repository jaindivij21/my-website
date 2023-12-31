import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/building-blocks/card"
import { Avatar, AvatarFallback, AvatarImage } from "../shared/ui/building-blocks/avatar";

// Assets Imports
import { UserCircle } from "lucide-react";


const TwitterBox = () => {
  const sampleTweetText = "🧵 Exploring Next.js 13: Unpacking the <Image> Tag and Solving Responsive Image 🧵 Exploring Next.js 13: Unpacking the <Image> Tag and Solving Responsive Image Cha Challenges 🖼️🔍."

  return (
    <Card
      className="-mr-12 2x-sm:-mr-4 x-sm:mr-0 lg:-mr-12 mb-4 sm:mb-6 lg:my-8 h-32 max-w-[20rem] lg:h-auto shadow-md shadow-border"
    >
      <a className="cursor-pointer" href="https://twitter.com/jaindivij_">
        <div className="flex items-start gap-2 lg:gap-4 px-2 pt-2 lg:px-4 lg:pt-4">
          <div>
            <Avatar className="w-7 h-7">
              <AvatarImage src={""} alt="User Avatar Icon" />
              <AvatarFallback>
                <UserCircle />
              </AvatarFallback>
            </Avatar>
          </div>
          <CardHeader className="space-y-0 lg:space-y-1.5 p-0">
            <CardTitle className="text-lg">Divij Jain</CardTitle>
            <CardDescription className="text-xs">@jaindivij_</CardDescription>
          </CardHeader>
        </div>
        <CardContent
          className="p-2 lg:p-4 max-h-[3.5rem] lg:max-h-[4.6rem] overflow-hidden text-xs lg:text-sm"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          <p>{sampleTweetText}</p>
        </CardContent>
      </a>
    </Card>
  )
}

export default TwitterBox;