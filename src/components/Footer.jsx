export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-auto">
      <p>© {new Date().getFullYear()} MyReactApp. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="hover:text-blue-400 mx-2">Home</a>
        <a href="#" className="hover:text-blue-400 mx-2">About</a>
        <a href="#" className="hover:text-blue-400 mx-2">Contact</a>
      </div>
    </footer>
  );
}
