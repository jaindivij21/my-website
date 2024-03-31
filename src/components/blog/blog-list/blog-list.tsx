// Component Imports
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/shared/ui/building-blocks/pagination";
import { BlogListCard } from "./blog-list-card/blog-list-card";

// Utils Imports
import { BlogModel } from "@/components/shared/ui/models/blog.model";

// Component: BlogList
// Description: This component is used to display the list of blog posts.
export const BlogList = () => {
  const blogPosts: BlogModel[] = [
    {
      image_src: 'https://lh3.googleusercontent.com/pw/ABLVV878TiB45YWkyLU-uZozp2c_ekzP8KcI1oQTP5F51oGIEk7nP-9W5_3gsYUuWeyDN8CkiAGtKsSy1LipUecc7uEbHWi6XUeu1335o88_82SCydrv0ohuJ1snwBLwVYXHYByv2A2xrvJPtkeELuP2D_HMnQ=w3124-h2018-s-no-gm',
      image_alt: 'Featured Blog Image',
      published_at: '2021-10-01T00:00:00.000Z',
      published_by: 'Divij Jain',
      read_time: '5 min',
      title: 'Why Travel Gets Me High',
      abstract: 'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.'
    },
    {
      image_src: 'https://lh3.googleusercontent.com/pw/ABLVV878TiB45YWkyLU-uZozp2c_ekzP8KcI1oQTP5F51oGIEk7nP-9W5_3gsYUuWeyDN8CkiAGtKsSy1LipUecc7uEbHWi6XUeu1335o88_82SCydrv0ohuJ1snwBLwVYXHYByv2A2xrvJPtkeELuP2D_HMnQ=w3124-h2018-s-no-gm',
      image_alt: 'Featured Blog Image',
      published_at: '2021-10-01T00:00:00.000Z',
      published_by: 'Divij Jain',
      read_time: '5 min',
      title: 'Why Travel Gets Me High',
      abstract: 'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.'
    }, {
      image_src: 'https://lh3.googleusercontent.com/pw/ABLVV878TiB45YWkyLU-uZozp2c_ekzP8KcI1oQTP5F51oGIEk7nP-9W5_3gsYUuWeyDN8CkiAGtKsSy1LipUecc7uEbHWi6XUeu1335o88_82SCydrv0ohuJ1snwBLwVYXHYByv2A2xrvJPtkeELuP2D_HMnQ=w3124-h2018-s-no-gm',
      image_alt: 'Featured Blog Image',
      published_at: '2021-10-01T00:00:00.000Z',
      published_by: 'Divij Jain',
      read_time: '5 min',
      title: 'Why Travel Gets Me High',
      abstract: 'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.'
    }, {
      image_src: 'https://lh3.googleusercontent.com/pw/ABLVV878TiB45YWkyLU-uZozp2c_ekzP8KcI1oQTP5F51oGIEk7nP-9W5_3gsYUuWeyDN8CkiAGtKsSy1LipUecc7uEbHWi6XUeu1335o88_82SCydrv0ohuJ1snwBLwVYXHYByv2A2xrvJPtkeELuP2D_HMnQ=w3124-h2018-s-no-gm',
      image_alt: 'Featured Blog Image',
      published_at: '2021-10-01T00:00:00.000Z',
      published_by: 'Divij Jain',
      read_time: '5 min',
      title: 'Why Travel Gets Me High',
      abstract: 'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.'
    }, {
      image_src: 'https://lh3.googleusercontent.com/pw/ABLVV878TiB45YWkyLU-uZozp2c_ekzP8KcI1oQTP5F51oGIEk7nP-9W5_3gsYUuWeyDN8CkiAGtKsSy1LipUecc7uEbHWi6XUeu1335o88_82SCydrv0ohuJ1snwBLwVYXHYByv2A2xrvJPtkeELuP2D_HMnQ=w3124-h2018-s-no-gm',
      image_alt: 'Featured Blog Image',
      published_at: '2021-10-01T00:00:00.000Z',
      published_by: 'Divij Jain',
      read_time: '5 min',
      title: 'Why Travel Gets Me High',
      abstract: 'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.'
    }, {
      image_src: 'https://lh3.googleusercontent.com/pw/ABLVV878TiB45YWkyLU-uZozp2c_ekzP8KcI1oQTP5F51oGIEk7nP-9W5_3gsYUuWeyDN8CkiAGtKsSy1LipUecc7uEbHWi6XUeu1335o88_82SCydrv0ohuJ1snwBLwVYXHYByv2A2xrvJPtkeELuP2D_HMnQ=w3124-h2018-s-no-gm',
      image_alt: 'Featured Blog Image',
      published_at: '2021-10-01T00:00:00.000Z',
      published_by: 'Divij Jain',
      read_time: '5 min',
      title: 'Why Travel Gets Me High',
      abstract: 'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.'
    }, {
      image_src: 'https://lh3.googleusercontent.com/pw/ABLVV878TiB45YWkyLU-uZozp2c_ekzP8KcI1oQTP5F51oGIEk7nP-9W5_3gsYUuWeyDN8CkiAGtKsSy1LipUecc7uEbHWi6XUeu1335o88_82SCydrv0ohuJ1snwBLwVYXHYByv2A2xrvJPtkeELuP2D_HMnQ=w3124-h2018-s-no-gm',
      image_alt: 'Featured Blog Image',
      published_at: '2021-10-01T00:00:00.000Z',
      published_by: 'Divij Jain',
      read_time: '5 min',
      title: 'Why Travel Gets Me High',
      abstract: 'I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about. I have always been a fan of traveling. It is the one thing that I have always been passionate about.'
    }
  ]


  return (
    <div className="flex flex-col mt-10 gap-10">
      {/* SECTION: Blog Grid */}
      <article className="grid gap-y-8 grid-cols-1 x-sm:gap-8 x-sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogPosts.map((blogPost, index) => (
          <BlogListCard
            key={index}
            index={index}
            blogPost={blogPost}
          />
        ))}
      </article>

      {/* SECTION: Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {[...Array(Math.ceil(blogPosts.length / 7))].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink href="#" isActive={index === 0}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default BlogList;