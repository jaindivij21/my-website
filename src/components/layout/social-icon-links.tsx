"use client"

// Essential Imports
import { motion } from "framer-motion";

// Component Imports
import { Button } from "@/components/shared/ui/building-blocks/button"

// Assets Imports
import { Linkedin, Facebook, Youtube, Instagram, Github } from "lucide-react"
import { Twitter, Patreon, BuyMeCoffee } from "../shared/icons"


// Component: Social Icon Links
// Description: Social Icon Links for the website's footer.
const SocialIconLinks = () => {
  return (
    <div className="flex flex-col flex-wrap p-2.5 gap-x-8">
      {/* Twitter */}
      <motion.a
        href="https://twitter.com/jaindivij_"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <div className="flex gap-2 items-center">
          <Twitter />
          <Button variant="ghost">Twitter</Button>
        </div>
      </motion.a>

      {/* Linkedin */}
      <motion.a
        href="https://www.linkedin.com/in/jaindivij/"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <div className="flex gap-2 items-center">
          <Linkedin />
          <Button variant="ghost">LinkedIn</Button>
        </div>
      </motion.a>

      {/* Facebook */}
      <motion.a
        href="https://www.facebook.com/passing.into.oblivion"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <div className="flex gap-2 items-center">
          <Facebook />
          <Button variant="ghost">Facebook</Button>
        </div>
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://www.youtube.com/channel/UCL5IczpWayaw1ZYJwNZE_0Q?view_as=subscriber"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <div className="flex gap-2 items-center">
          <Instagram />
          <Button variant="ghost">Instagram</Button>
        </div>
      </motion.a>

      {/* Youtube */}
      <motion.a
        href="https://www.instagram.com/passing.into.oblivion/"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <div className="flex gap-2 items-center">
          <Youtube />
          <Button variant="ghost">Youtube</Button>
        </div>
      </motion.a>

      {/* Github */}
      <motion.a
        href="https://github.com/jaindivij21"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <div className="flex gap-2 items-center">
          <Github />
          <Button variant="ghost">Github</Button>
        </div>
      </motion.a>

      {/* Patreon */}
      <motion.a
        href="https://www.instagram.com/passing.into.oblivion/"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <div className="flex gap-2 items-center">
          <Patreon />
          <Button variant="ghost">Patreon</Button>
        </div>
      </motion.a>

      {/* Buy Me A Coffee */}
      <motion.a
        href="https://www.instagram.com/passing.into.oblivion/"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <div className="flex gap-2 items-center">
          <BuyMeCoffee />
          <Button variant="ghost">Buy Me A Coffee</Button>
        </div>
      </motion.a>
    </div>
  )
}

export default SocialIconLinks;