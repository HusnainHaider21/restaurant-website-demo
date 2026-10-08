export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-black text-lg">Taste Avenue</h3>
          <p className="text-sm text-gray-500 mt-1">Rail Bazar, Jaranwala • 11 AM - 11 PM</p>
        </div>
        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>Fresh Food • Fast Delivery • Easy WhatsApp Ordering</p>
          <p className="mt-1 font-semibold text-black">© 2026 Taste Avenue</p>
        </div>
      </div>
    </footer>
  )
}