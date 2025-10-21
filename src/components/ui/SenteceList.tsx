import React from "react";

type SenteceListProps<T> = {
  data: T[];
  title: (item: T) => string;
  description: (item: T) => string;
  className?: string;
  liClass?: string;
  titleClass?: string;
  descClass?: string;
};

function SenteceList<T>({
  data,
  title,
  description,
  className = "flex flex-col gap-10",
  liClass = "flex flex-col gap-4",
  titleClass = "uppercase font-bold",
  descClass = "",
}: SenteceListProps<T>) {
  return (
    <div>
      <ul className={className}>
        {data.map((item, index) => (
          <li key={index} className={liClass}>
            <h3 className={titleClass}>
              {index + 1}
              {"."}
              {title(item)}
            </h3>
            <p className={descClass}>{description(item)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SenteceList;
