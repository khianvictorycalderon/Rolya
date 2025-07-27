import { useEffect, useState } from "react";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import ChooseLocation from "./static_components/choose_loc";
import CardList from "./components/card_list_overlay";
import { slideToID } from "./Utility";

// Only show alert on production so that I won't be annoyed in development
const isProduction = process.env.NODE_ENV === "production";
const disclaimerMessage = "This is a demo website created for presentation purposes only and does not represent a real business.";

export default function App() {

  // I will use this later
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    if (isProduction) {
      alert(disclaimerMessage);
    }
  },[]);

  return (
    <>
      <NavBar
        BG_Color="bg-slate-950"
        Logo_Image="icons/rolya.png"
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
              OnClick: () => slideToID("feature_listing"),
            },
            {
              Label: "Talk to an Agent",
              Classname: "bg-cyan-400 text-black hover:bg-cyan-600",
              OnClick: () => alert("Connecting to an Agent..."),
            },
          ]}
        />
      </div>

      <ChooseLocation
        CountrySetter={setSelectedCountry}
        CitySetter={setSelectedCity}
      />
      
      <div id="feature_listing"/>
      <section className="py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-slate-800 text-center">
            Featured Listings
          </h2>
          <CardList
            Data={[
              {
                Date: "July 25, 2025",
                Title: "Modern Home in Driftveil",
                Description: "4-bedroom with solar panels, huge backyard, and garage.",
                Image: "images/feature_listing/house1.jpg",
                OnClick: () => alert("Clicked Driftveil House"),
                Location: `${selectedCountry || "Philippines"}, ${selectedCity || "Driftveil"}`,
              },
              {
                Date: "July 18, 2025",
                Title: "Cozy Apartment in Luneth",
                Description: "2-bedroom apartment with walking access to local cafés.",
                Image: "images/feature_listing/house2.jpg",
                OnClick: () => alert("Clicked Luneth Apartment"),
                Location: `${selectedCountry || "Canada"}, ${selectedCity || "Luneth"}`,
              },
              {
                Date: "July 10, 2025",
                Title: "Luxury Villa in Velmora",
                Description: "5-bedroom villa with pool, gym, and mountain views.",
                Image: "images/feature_listing/house3.jpg",
                OnClick: () => alert("Clicked Velmora Villa"),
                Location: `${selectedCountry || "Japan"}, ${selectedCity || "Velmora"}`,
              },
            ]}

            MaxRow={3}
          />
          <p className="mt-8 text-center text-slate-600 max-w-3xl mx-auto">
            These handpicked properties showcase the best in modern design, location, and comfort—perfect for families, professionals, and investors seeking premium real estate in our top fictional cities.
          </p>
        </div>
      </section>
      
    </>
  )
}