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
  MaxRow?: number;
}

export default function CardList({ Data, ClassName = "", MaxRow }: CardListProps) {

    // If it works, don't touch it
    const RowPerCol:{ [key: number]: string } = {
        1: "lg:w-full",
        2: "lg:w-[45%]",
        3: "lg:w-[30%]",
        4: "lg:w-[18%]",
        5: "lg:w-[17%]",
        6: "lg:w-[15%]"
    }

  return (
    <div className={`flex flex-wrap gap-6 justify-center ${ClassName}`}>
        {Data.map((item, index) => (
            <article
                key={index}
                onClick={item.OnClick}
                className={`w-full sm:w-[48%] ${MaxRow && RowPerCol[MaxRow] || "lg:w-[30%]"} relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg hover:cursor-pointer min-h-[420px] hover:scale-105`}
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
