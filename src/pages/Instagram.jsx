import { FaHeart, FaComment, FaTh, FaRegPlayCircle } from 'react-icons/fa';
import { BiUserPin } from 'react-icons/bi';
import { HiBadgeCheck } from 'react-icons/hi';
import ScrollReveal from '../components/ScrollReveal';
import logoBg from '../../assets/logobgwhite.png';

const Instagram = () => {
  const posts = [
    { src: '/images/lifestyle.jpeg', likes: '1,245', comments: '84' },
    { src: '/images/detail-closeup.png', likes: '892', comments: '42' },
    { src: '/images/rolling-papers-open.webp', likes: '3,421', comments: '156' },
    { src: '/images/hero-banner.webp', likes: '2,109', comments: '98' },
    { src: '/images/display-box.webp', likes: '1,833', comments: '67' },
    { src: '/images/step-6.png', likes: '954', comments: '23' },
    { src: '/images/step-7.png', likes: '1,120', comments: '45' },
    { src: '/images/collectors-box.webp', likes: '2,890', comments: '112' },
    { src: '/images/cone-tube.webp', likes: '1,567', comments: '59' },
  ];

  return (
    <div className="pt-32 pb-20 px-4 md:px-5 max-w-4xl mx-auto min-h-screen text-secondary">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 mb-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0 flex justify-center md:justify-end md:w-1/3">
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border border-secondary/20 bg-secondary/5 relative cursor-pointer flex items-center justify-center">
              {/* Fake Story Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-secondary/40 m-[2px]"></div>
              <img 
                src={logoBg} 
                alt="Suprbaby Profile" 
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col flex-1">
            {/* Header / Actions */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4 md:mb-6">
              <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                suprbaby <HiBadgeCheck className="text-secondary text-xl" />
              </h1>
              <div className="flex gap-2">
                <button className="bg-secondary text-primary font-bold text-sm px-6 py-1.5 rounded-xl hover:bg-secondary/90 transition-colors">
                  Follow
                </button>
                <button className="bg-secondary/10 text-secondary font-bold text-sm px-6 py-1.5 rounded-xl hover:bg-secondary/20 transition-colors">
                  Message
                </button>
              </div>
            </div>

            {/* Stats (Desktop) */}
            <div className="hidden md:flex items-center gap-10 mb-6">
              <span className="text-base"><strong className="font-bold">9</strong> posts</span>
              <span className="text-base"><strong className="font-bold">24.5K</strong> followers</span>
              <span className="text-base"><strong className="font-bold">12</strong> following</span>
            </div>

            {/* Bio */}
            <div className="text-sm md:text-base mb-6">
              <p className="font-bold mb-1">Suprbaby India</p>
              <p className="opacity-80">Slow & smooth. Premium rolling papers.</p>
              <p className="opacity-80">Crafted for those who appreciate the finer things. ✨</p>
              <a href="https://suprbaby.in" className="font-semibold hover:underline mt-1 block">suprbaby.in</a>
            </div>
          </div>
        </div>

        {/* Stats (Mobile) */}
        <div className="flex md:hidden items-center justify-around py-3 border-t border-secondary/20 mb-6">
          <div className="flex flex-col items-center"><strong className="font-bold">9</strong><span className="text-sm opacity-80">posts</span></div>
          <div className="flex flex-col items-center"><strong className="font-bold">24.5K</strong><span className="text-sm opacity-80">followers</span></div>
          <div className="flex flex-col items-center"><strong className="font-bold">12</strong><span className="text-sm opacity-80">following</span></div>
        </div>
      </ScrollReveal>

      {/* Tabs */}
      <ScrollReveal delay={0.1}>
        <div className="flex justify-center border-t border-secondary/20 mb-1">
          <div className="flex gap-12">
            <button className="flex items-center gap-2 py-4 border-t-2 border-secondary text-xs font-bold tracking-widest text-secondary">
              <FaTh className="text-sm" /> POSTS
            </button>
            <button className="flex items-center gap-2 py-4 border-t-2 border-transparent text-xs font-bold tracking-widest opacity-50 hover:opacity-100">
              <FaRegPlayCircle className="text-sm" /> REELS
            </button>
            <button className="flex items-center gap-2 py-4 border-t-2 border-transparent text-xs font-bold tracking-widest opacity-50 hover:opacity-100">
              <BiUserPin className="text-sm" /> TAGGED
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid */}
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-3 gap-1 md:gap-2">
          {posts.map((post, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden bg-secondary/10 cursor-pointer"
            >
              <img
                src={post.src}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-secondary font-bold text-lg md:text-xl">
                  <FaHeart /> {post.likes}
                </div>
                <div className="flex items-center gap-2 text-secondary font-bold text-lg md:text-xl">
                  <FaComment /> {post.comments}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Instagram;
