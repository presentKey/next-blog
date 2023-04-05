import { getNonFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPost() {
  const posts = await getNonFeaturedPosts();

  return (
    <section>
      <h2 className='text-2xl font-bold my-2'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
