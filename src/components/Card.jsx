export default function Card({ children }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
      {children}
    </div>
  );
}
