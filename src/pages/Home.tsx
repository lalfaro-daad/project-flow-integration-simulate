export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Dashboard con Tailwind CSS 🎉
      </h1>

      {/* Formulario de prueba */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Formulario de prueba</h2>
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded transition-colors">
          Enviar
        </button>
      </div>

      {/* Botones de prueba */}
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Azul</button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Verde</button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Rojo</button>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-2">Tarjeta 1</h3>
          <p className="text-gray-600">Contenido de ejemplo para la tarjeta 1.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-2">Tarjeta 2</h3>
          <p className="text-gray-600">Contenido de ejemplo para la tarjeta 2.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-2">Tarjeta 3</h3>
          <p className="text-gray-600">Contenido de ejemplo para la tarjeta 3.</p>
        </div>
      </div>
    </div>
  );
}
