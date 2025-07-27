import { useEffect, useState } from "react";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import ChooseLocation from "./static_components/choose_loc";
import CardList from "./components/card_list_overlay";
import { slideToID } from "./Utility";
import TalkAgent from "./static_components/talk_agent";
import ServiceOffers from "./static_components/service_offer";
import AboutUs from "./static_components/about";
import ContactUs from "./static_components/contact";

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
          { Label: "About", OnClick: () => slideToID("about") },
          { Label: "Buy", OnClick: () => slideToID("sales_listing") },
          { Label: "Rent", OnClick: () => slideToID("rental_listing") },
          { Label: "Invest", OnClick: () => slideToID("investment_listing") },
          { Label: "Service", OnClick: () => slideToID("service") },
          { Label: "Contact", OnClick: () => slideToID("contact") },
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
              OnClick: () => slideToID("talk_agent"),
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
            These handpicked properties showcase the best in modern design, location, and perfect for families, professionals, and investors seeking premium real estate in our top fictional cities.
          </p>
        </div>
      </section>
      
      <div id="sales_listing"/>
      <section className="pb-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-slate-800 text-center">
            Sales Listings
          </h2>
          <CardList
            Data={[
              {
                Date: "July 26, 2025",
                Title: "Seaside Bungalow in Solaria",
                Description: "Beachfront 3-bedroom with private deck and sea views.",
                Image: "images/sales_listing/house1.jpg",
                OnClick: () => alert("Clicked Solaria Bungalow"),
                Location: `${selectedCountry || "Australia"}, ${selectedCity || "Solaria"}`,
              },
              {
                Date: "July 22, 2025",
                Title: "Urban Loft in Zenthra",
                Description: "Stylish loft with industrial design in downtown Zenthra.",
                Image: "images/sales_listing/house2.jpg",
                OnClick: () => alert("Clicked Zenthra Loft"),
                Location: `${selectedCountry || "USA"}, ${selectedCity || "Zenthra"}`,
              },
              {
                Date: "July 20, 2025",
                Title: "Countryside Cottage in Corvalis",
                Description: "2-bedroom cottage with a garden and scenic views.",
                Image: "images/sales_listing/house3.jpg",
                OnClick: () => alert("Clicked Corvalis Cottage"),
                Location: `${selectedCountry || "United Kingdom"}, ${selectedCity || "Corvalis"}`,
              },
              {
                Date: "July 19, 2025",
                Title: "Penthouse in Elaria Heights",
                Description: "Luxury penthouse with panoramic skyline view and rooftop pool.",
                Image: "images/sales_listing/house4.jpg",
                OnClick: () => alert("Clicked Elaria Penthouse"),
                Location: `${selectedCountry || "Germany"}, ${selectedCity || "Elaria"}`
              }
            ]}
            MaxRow={4}
          />
          <div className="flex justify-center mt-10">
            <button
              className="px-6 py-3 bg-slate-900 text-white text-lg font-semibold rounded-xl shadow-md hover:scale-105 hover:cursor-pointer hover:bg-slate-800 transition-all duration-200 active:scale-95"
              onClick={() => alert("Clicked see more listing!")}
            >
              See More Listings
            </button>
          </div>
          <p className="mt-8 text-center text-slate-600 max-w-3xl mx-auto">
            Explore our diverse collection of homes for sale, from serene retreats to modern city living. Find the perfect property that matches your lifestyle and budget.
          </p>
        </div>
      </section>

      <div id="rental_listing" />
        <section className="pb-20 bg-slate-50">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-slate-800 text-center">
              Rental Listings
            </h2>
            <CardList
              Data={[
                {
                  Date: "July 27, 2025",
                  Title: "Office Tower in Metronova",
                  Description: "20-story commercial building with elevator and parking.",
                  Image: "images/rental_listing/building1.jpg",
                  OnClick: () => alert("Clicked Metronova Tower"),
                  Location: `${selectedCountry || "Singapore"}, ${selectedCity || "Metronova"}`
                },
                {
                  Date: "July 23, 2025",
                  Title: "Retail Complex in Solaris",
                  Description: "Multi-unit retail space near central plaza with high foot traffic.",
                  Image: "images/rental_listing/building2.jpg",
                  OnClick: () => alert("Clicked Solaris Complex"),
                  Location: `${selectedCountry || "South Korea"}, ${selectedCity || "Solaris"}`
                },
                {
                  Date: "July 21, 2025",
                  Title: "Mixed-Use Building in Vernessa",
                  Description: "Residential and commercial floors with rooftop garden.",
                  Image: "images/rental_listing/building3.jpg",
                  OnClick: () => alert("Clicked Vernessa Building"),
                  Location: `${selectedCountry || "France"}, ${selectedCity || "Vernessa"}`
                },
                {
                  Date: "July 18, 2025",
                  Title: "Tech Hub in Nuvora",
                  Description: "Modern smart-building ideal for startups and tech firms.",
                  Image: "images/rental_listing/building4.jpg",
                  OnClick: () => alert("Clicked Nuvora Hub"),
                  Location: `${selectedCountry || "USA"}, ${selectedCity || "Nuvora"}`
                }
              ]}
              MaxRow={4}
            />
            <div className="flex justify-center mt-10">
              <button
                className="px-6 py-3 bg-slate-900 text-white text-lg font-semibold rounded-xl shadow-md hover:scale-105 hover:cursor-pointer hover:bg-slate-800 transition-all duration-200 active:scale-95"
                onClick={() => alert("Clicked see more rental listings!")}
              >
                See More Rentals
              </button>
            </div>
            <p className="mt-8 text-center text-slate-600 max-w-3xl mx-auto">
              Discover commercial and residential buildings available for lease in prime locations. Ideal for businesses, developers, and professionals seeking scalable spaces.
            </p>
          </div>
        </section>

        <div id="investment_listing" />
        <section className="pb-20 bg-slate-50">
          <div className="max-w-screen-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-slate-800 text-center">
              Investment Properties
            </h2>
            <CardList
              Data={[
                {
                  Date: "July 28, 2025",
                  Title: "Agricultural Land in Verdantia",
                  Description: "50 hectares of fertile soil ideal for crop production and farming.",
                  Image: "images/investment_listing/land1.jpg",
                  OnClick: () => alert("Clicked Verdantia Farmland"),
                  Location: `${selectedCountry || "Brazil"}, ${selectedCity || "Verdantia"}`
                },
                {
                  Date: "July 24, 2025",
                  Title: "Commercial Lot in Auravale",
                  Description: "Prime roadside plot suited for gas stations or logistics centers.",
                  Image: "images/investment_listing/land2.jpg",
                  OnClick: () => alert("Clicked Auravale Lot"),
                  Location: `${selectedCountry || "USA"}, ${selectedCity || "Auravale"}`
                },
                {
                  Date: "July 22, 2025",
                  Title: "Beachfront Land in Calydra",
                  Description: "Undeveloped coastal land perfect for resort development.",
                  Image: "images/investment_listing/land3.jpg",
                  OnClick: () => alert("Clicked Calydra Beachfront"),
                  Location: `${selectedCountry || "Thailand"}, ${selectedCity || "Calydra"}`
                },
                {
                  Date: "July 20, 2025",
                  Title: "Mountain View Acreage in Norwyn",
                  Description: "Large elevated lot with scenic views, ideal for eco-lodges.",
                  Image: "images/investment_listing/land4.jpg",
                  OnClick: () => alert("Clicked Norwyn Acreage"),
                  Location: `${selectedCountry || "New Zealand"}, ${selectedCity || "Norwyn"}`
                }
              ]}
              MaxRow={4}
            />

            <div className="flex justify-center mt-10">
              <button
                className="px-6 py-3 bg-slate-900 text-white text-lg font-semibold rounded-xl shadow-md hover:scale-105 hover:cursor-pointer hover:bg-slate-800 transition-all duration-200 active:scale-95"
                onClick={() => alert("Clicked see more investment listings!")}
              >
                See More Investment Options
              </button>
            </div>

            <p className="mt-8 text-center text-slate-600 max-w-3xl mx-auto">
              Browse high-potential land properties perfect for agricultural, commercial, or eco-tourism ventures. Invest in locations with long-term value and development opportunity.
            </p>
          </div>
        </section>

        <div id="talk_agent"/>
        <TalkAgent/>

        <div id="service" />
        <section className="pt-20 bg-slate-50">
          <div className="max-w-screen-xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-800 text-center">
              Our Services
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mt-4">
              At Rolya Real Estate, we offer a comprehensive suite of services tailored to meet every client’s property needs. From buying and selling homes to expert investment advice and seamless rental management, our team is here to help you every step of the way.
            </p>
            <ServiceOffers />
          </div>
        </section>

        <div id="about"/>
        <AboutUs/>

        <div id="contact"/>
        <ContactUs/>
    </>
  )
}