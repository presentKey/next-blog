import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='mx-auto rounded-full w-64 h-64 object-cover'
        src={profileImage}
        width={256}
        height={256}
        alt='Picture of the author'
        priority
      />
      <h2 className='text-3xl font-bold mt-2'>{`Hi, I'm PK`}</h2>
      <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
      <p>꿈을 코딩하는 사람, 드림코더 prensentKey</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>
          Contact Me
        </button>
      </Link>
    </section>
  );
}
