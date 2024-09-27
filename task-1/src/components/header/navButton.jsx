import React from 'react';

function NavButton({ children, isOutlined }) {
  const baseClasses = "gap-2.5 self-stretch p-2.5 my-auto w-[180px]";
  const variantClasses = isOutlined
    ? "text-orange-400 border-orange-400 border-solid border-[3px]"
    : "bg-orange-400 text-neutral-900";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}

export default NavButton;