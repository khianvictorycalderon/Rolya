import { useState } from "react";

interface ChooseLocationProps {
  CountrySetter: (country: string) => void;
  CitySetter: (city: string) => void;
}

const countries = [
  "Philippines", "USA", "Canada", "Australia", "United Kingdom",
  "Germany", "France", "Japan", "Brazil", "South Korea",
  "Italy", "Spain", "India"
];

const fictionalCities = [
  "Solaria", "Driftveil", "Elaria", "Velmora", "Zenthra", "Corvalis", "Luneth"
];

export default function ChooseLocation({ CountrySetter, CitySetter }: ChooseLocationProps) {
  const [localCountry, setLocalCountry] = useState<string>("");
  const [localCity, setLocalCity] = useState<string>("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLocalCountry(value);
    CountrySetter(value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLocalCity(value);
    CitySetter(value);
  };

  return (
    <section className="w-full bg-gray-100 text-slate-900 py-16">
      <div className="max-w-screen-md mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          Choose Location
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Country */}
          <div>
            <label className="block mb-2 text-sm font-medium">Country</label>
            <select
              value={localCountry}
              onChange={handleCountryChange}
              className="w-full p-3 bg-white border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
            >
              <option value="" disabled>Select a country</option>
              {countries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 text-sm font-medium">City</label>
            <select
              value={localCity}
              onChange={handleCityChange}
              className="w-full p-3 bg-white border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
            >
              <option value="" disabled>Select a city</option>
              {fictionalCities.map((city, i) => (
                <option key={i} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}