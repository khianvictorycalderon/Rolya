const services = [
  { id: 1, name: 'Property Buying Assistance', description: 'Helping you find and purchase your ideal home with ease.' },
  { id: 2, name: 'Rental Property Services', description: 'Comprehensive support for both tenants and landlords.' },
  { id: 3, name: 'Real Estate Investment Guidance', description: 'Expert advice for smart and profitable property investments.' },
];

export default function ServiceOffers() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="order-first text-2xl font-bold text-slate-900 sm:text-3xl">{service.name}</dt>
              <dd className="text-base text-slate-600">{service.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
