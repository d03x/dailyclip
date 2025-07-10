import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function AvatarImage({
  src,
  alt = 'Thumbnail',
  className = '',
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative select-none overflow-hidden rounded-full ${className}`}
    >
      {/* Shimmer loading animation */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300" />
      )}

      {/* Lazy loaded image */}
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full select-none pointer-events-none h-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
