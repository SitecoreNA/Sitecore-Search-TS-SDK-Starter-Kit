import { ArticleCard } from '@sitecore-search/ui';
import Link from 'next/link';
import Image from 'next/image';
import { DEFAULT_IMG_URL } from '@/app/_data/customizations';
import { ArrowRight } from 'lucide-react';

type ArticleItemCardProps = {
  className?: string;
  article: {
    id: string;
    name: string;
    title: string;
    type: string;
    image_url?: string;
    url: string;
    source_id: string;
  };
  index: number;
};


const ArticleItemCard = ({ className = '', article }: ArticleItemCardProps) => {
  const validImageUrl = article.image_url?.trim() ? article.image_url : DEFAULT_IMG_URL;

  return (
    <ArticleCard.Root
      key={article.id}
      className={`group relative border shadow-md border-gray-300 dark:border-gray-600 rounded-md hover:shadow-lg hover:scale-102 hover:transition-all hover:ease-linear hover:duration-300 focus-within:scale-102 focus-within:transition-all focus-within:ease-linear focus-within:duration-300 focus-within:hover:shadow-lg ${className}`}
    >
      <div className="aspect-h-1 aspect-w-1 h-32 w-full overflow-hidden rounded-t-md bg-gray-200 sm:aspect-none">
        <Image
          src={validImageUrl}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          alt={article.name || article.title}
          width={500}
          height={115}
          loading="lazy"
        />
      </div>
      <div className="m-4 flex-col justify-between relative">
        <Link
          className="focus:outline-indigo-500"
          href={`/detail/${article.id}`}
          aria-label={`View details for ${article.name || article.title}`}
        >
          <span aria-hidden="true" className="absolute inset-0"></span>
          <ArticleCard.Title className="mt-4 text-base h-[100px] overflow-hidden font-bold">
            {article.name || article.title}
          </ArticleCard.Title>
        </Link>
        <ArticleCard.Subtitle className="mt-3 text-sm flex text-gray-600 dark:text-gray-200">
          {/* {article.type} */}
          <div className="text-blue-600 hover:text-blue-800 text-sm font-medium right-0">Read More →</div>
        </ArticleCard.Subtitle>
      </div>
    </ArticleCard.Root>
  );
};

export default ArticleItemCard;
