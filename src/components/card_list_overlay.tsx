interface CardListItem {
  Date: string;
  Title: string;
  Description: string;
  Image: string;
  OnClick: () => void;
  Location?: string;
}

interface CardListProps {
  Data: CardListItem[];
  ClassName?: string;
}

export default function CardList({ Data, ClassName = "" }: CardListProps) {
  return (
    <div className={`flex flex-wrap gap-6 justify-center ${ClassName}`}>
        {Data.map((item, index) => (
            <article
                key={index}
                onClick={item.OnClick}
                className="w-full sm:w-[48%] lg:w-[31%] relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg hover:cursor-pointer h-[420px] hover:scale-105" // <- set fixed height
            >
            <img
                alt={item.Title}
                src={item.Image}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/60 to-gray-900/30 h-full flex flex-col justify-end">
                <div className="p-4 sm:p-6">
                    <time className="block text-xs text-white/90">{item.Date}</time>
                    <h3 className="mt-0.5 text-lg text-white">{item.Title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        {item.Description}<br/>
                        {item.Location && (
                            <>
                                <b>Location</b>: {item.Location}
                            </>
                        )}
                    </p>
                </div>
            </div>
            </article>
        ))}
    </div>
  );
}
