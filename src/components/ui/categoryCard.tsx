import React, {type FC } from 'react';
import arrow from '../../assets/arrow.png';

interface CategoryCardProps {
  image: string;
  price: string;
  title: string
}

const CategoryCard: FC<CategoryCardProps> = ({ image, title, price }) => {
  return (
    <div className='w-[420px] h-[250px] rounded-[20px] bg-[rgba(242,242,242,1)] p-4 relative overflow-hidden'>
      <div className='flex items-center justify-between h-full'>
        <div className='h-full w-1/2 relative'>
          <div className='absolute left-4 top-4 text-lg font-semibold'>{title}</div>
          <div className='absolute left-4 bottom-4'>
            <div className='flex items-center justify-between w-[85px] text-sm font-medium'>
              От {price}
              <img src={arrow} alt="arrow" className='w-4 h-4' />
            </div>
          </div>
        </div>
        <div className='w-1/2 flex items-end justify-end'>
          <img src={image} alt="category" className='h-[90%] object-contain' />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CategoryCard);
