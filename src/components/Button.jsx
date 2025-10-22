export default function Button({ children, onClick, variant = 'primary', disabled = false }) {
  const base = 'px-3 py-1 rounded font-medium transition'
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] || variants.default} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  )
}
