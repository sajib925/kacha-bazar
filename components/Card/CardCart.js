import React from 'react'
import MinusIcon from '../SvgIcons/MinusIcon';
import PlusIcon from '../SvgIcons/PlusIcon';

const CardCart = () => {
  return (
    
      <div className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded">
        <button>
          <span className="text-dark text-base">
           <MinusIcon />
          </span>
        </button>
        <p className="text-sm text-dark px-1 font-inter font-semibold">1</p>
        <button>
          <span className="text-dark text-base">
           <PlusIcon />
          </span>
        </button>
      </div>
    
  );
}

export default CardCart