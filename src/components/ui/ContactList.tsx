import Link from "next/link";
import React from "react";

type ContactListProps<T> = {
  data: T[];
  title: (item: T) => string;
  path: (item: T) => string;
  icon?: (item: T) => React.ElementType;
  className?: string;
  titleClass?: string;
  linkClass?: string;
};

function ContactList<T>({
  data,
  path,
  title,
  icon,
  className = "",
  titleClass = "",
  linkClass = "",
}: ContactListProps<T>) {
  return (
    <div className={className}>
      {data.map((item, index) => {
        const Icon = icon ? icon(item) : null;
        return (
          <div key={index}>
            <Link href={path(item)} className={linkClass}>
              <span className={titleClass}>{title(item)}</span>
              {Icon && (
                <span>
                  <Icon />
                </span>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
