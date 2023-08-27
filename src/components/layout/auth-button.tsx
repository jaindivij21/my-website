import { LogIn } from "lucide-react"
import { Button } from "../shared/ui/button"

const AuthButton = () => {
  return (
    <Button variant="outline">
      <LogIn className="mr-2 h-4 w-4" /> Login
    </Button>
  )
}

export default AuthButton;