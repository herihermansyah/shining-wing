import Link from "next/link";
import React from "react";

type MenuListProps<T> = {
  data: T[];
  path: (item: T) => string;
  title: (item: T) => string;
  arialLabel?: string;
  className?: string;
  titleCalss?: string;
};

function MenuList<T>({
  data,
  title,
  path,
  className = "",
  arialLabel,
  titleCalss = "",
}: MenuListProps<T>) {
  return (
    <nav aria-label={arialLabel}>
      <ul className={className}>
        {data.map((item, index) => (
          <li key={index}>
            <Link href={path(item)}>
              <span className={titleCalss}>{title(item)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuList;
