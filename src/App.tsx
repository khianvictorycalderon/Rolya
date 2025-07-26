import Hero from "./components/hero";
import NavBar from "./components/navbar";

export default function App() {
  return (
    <>
      <NavBar
        BG_Color="bg-slate-950"
        ID_Ref="hero"
        Buttons={[
          { Label: "About", OnClick: () => alert("About") },
          { Label: "Buy", OnClick: () => alert("Buying...") },
          { Label: "Rent", OnClick: () => alert("Renting...") },
          { Label: "Invest", OnClick: () => alert("Investing...") },
          { Label: "Contact", OnClick: () => alert("Contact us") },
          { Label: "Service", OnClick: () => alert("Services") },
        ]}
      />
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
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
        <p>asf</p>
      </div>
    </>
  )
}