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
    <Card className="my-8 w-80">
      <div className="flex items-start gap-4 px-4 pt-4">
        <div>
          <Avatar className="w-8 h-8">
            <AvatarImage src={""} alt="User Avatar Icon" />
            <AvatarFallback>
              <UserCircle />
            </AvatarFallback>
          </Avatar>
        </div>
        <CardHeader className="p-0">
          <CardTitle>Divij Jain</CardTitle>
          <CardDescription>@jaindivij_</CardDescription>
        </CardHeader>
      </div>
      <CardContent
        className="p-4 max-h-[4.6rem] overflow-hidden text-sm"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        <p>{sampleTweetText}</p>
      </CardContent>
    </Card>

  )
}

export default TwitterBox;