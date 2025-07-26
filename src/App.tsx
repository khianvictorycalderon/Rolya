import Hero from "./components/hero";

export default function App() {
  return (
    <>
      <div id="hero">
        <Hero
          BG_Image="images/bg.jpg"
          Title="Find Your Dream Home with Rolya Real Estate"
          Description="Explore prime properties in the most sought-after locations. Whether you're buying, renting, or investing. Rolya makes your next move effortless and elegant."
          OverlayOpacity={0.7}
          Buttons={[
            {
              Label: "Browse Listings",
              Classname: "bg-slate-950 text-white hover:bg-slate-800",
              OnClick: () => alert("Browsing Listings..."),
            },
            {
              Label: "Talk to an Agent",
              Classname: "bg-cyan-400 text-black hover:bg-cyan-600",
              OnClick: () => alert("Connecting to an Agent..."),
            },
          ]}
        />
      </div>
      <div>
        <p>asf</p>
      </div>
    </>
  )
}