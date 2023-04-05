import { getFeaturedPosts } from '../service/posts';
import PostsGird from './PostsGird';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGird posts={posts} />
    </section>
  );
}
