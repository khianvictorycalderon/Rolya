interface HeroProps {
  BG_Image: string;
  Title: string;
  Description: string;
  OverlayOpacity: number; // from 0 (transparent) to 1 (fully black)
  Buttons: {
    Label: string;
    Classname: string; // background color and text color
    OnClick: () => void;
  }[];
}

export default function Hero({
  BG_Image,
  Title,
  Description,
  OverlayOpacity,
  Buttons,
}: HeroProps) {
  return (
    <section
      className="relative w-screen h-screen flex items-center justify-start bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${BG_Image})` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: OverlayOpacity }}
      />

      {/* Content shifted to the left */}
      <div className="relative z-10 text-left px-6 sm:pl-12 md:pl-20 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {Title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-200">
          {Description}
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          {Buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.OnClick}
              className={`rounded px-5 py-3 font-medium shadow-sm transition-colors ${button.Classname} hover:cursor-pointer`}
            >
              {button.Label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
