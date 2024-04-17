import React from 'react';

export interface PurchaseButtonProps {
  message: string;
  onClick: () => void;
  disabled?: boolean;
}

export const PurchaseButton: React.FC<PurchaseButtonProps> = (props: PurchaseButtonProps): React.ReactElement => {
  const { message, onClick: onClickCallback, disabled = false } = props;

  const handleOnClick = (): void => {
    onClickCallback();
  };

  return (
    <button
      id="btn-purchase"
      name="btn-purchase"
      className="btn btn-lg background-color--base text-white poppins-medium text-lg uppercase border-none w-full"
      data-testid="btn-purchase"
      data-cy="btn-purchase"
      onClick={handleOnClick}
      disabled={disabled}
    >
      {message}
    </button>
  );
};
