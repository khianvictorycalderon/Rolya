export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Rolya Realty</h2>
          <p className="text-gray-400 text-sm">
            Your trusted partner in finding the perfect property. Whether it's land, a home, or an investment.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Demo website created by{" "}
            <a
              href="https://khian.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >Khian Victory D. Calderon
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => alert("Home clicked")} className="hover:text-white">Home</button></li>
            <li><button onClick={() => alert("About clicked")} className="hover:text-white">About</button></li>
            <li><button onClick={() => alert("Services clicked")} className="hover:text-white">Services</button></li>
            <li><button onClick={() => alert("Contact clicked")} className="hover:text-white">Contact</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Legal & License</h3>
          <p className="text-sm text-gray-400">
            Property images and content used for demonstration purposes only. All rights reserved by their respective owners.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><button onClick={() => alert("Facebook clicked")} className="hover:text-white">Facebook</button></li>
            <li><button onClick={() => alert("Instagram clicked")} className="hover:text-white">Instagram</button></li>
            <li><button onClick={() => alert("LinkedIn clicked")} className="hover:text-white">LinkedIn</button></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rolya Realty. All rights reserved.
      </div>
    </footer>
  );
}
