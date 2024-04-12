import React, { useState } from 'react';

export interface TagLineProps {
  items: string[];
  onSelectItem: (selectedItem: string | null) => void;
  className?: string;
}

export const TagLine: React.FC<TagLineProps> = (props: TagLineProps): React.ReactElement => {
  const { items, onSelectItem, className = 'flex flex-row' } = props;

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleOnClick = (item: string): void => {
    const itemToSelect = selectedItem === item ? null : item;
    setSelectedItem(itemToSelect);
    onSelectItem(itemToSelect);
  };

  return (
    <div className={`tag-line ${className}`}>
      {items.map((name, index) => (
        <button
          key={`tag_${name}_${index}`}
          id={`btn-catalog-${name}`}
          name={`btn-catalog-${name}`}
          onClick={() => handleOnClick(name)}
          className={`btn rounded-badge poppins-regular text-base mr-3 ${selectedItem === name ? 'background-color--base text-white' : ''}`}
          data-testid={`btn-catalog-${name}`}
          data-cy={`btn-catalog-${name}`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
