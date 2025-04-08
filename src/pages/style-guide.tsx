import React from "react";

const colors = [
  { name: "ion-green", hex: "#2A8373" },
  { name: "ion-green-light", hex: "#B2D9D1" },
  { name: "ion-green-dark", hex: "#1F6A5E" },
  { name: "ion-navy", hex: "#0C2E44" },
  { name: "ion-navy-light", hex: "#3C5C73" },
  { name: "ion-navy-dark", hex: "#081E2F" },
  { name: "ion-gray", hex: "#F4F7F9" },
  { name: "ion-gray-dark", hex: "#A0A0A0" },
  { name: "ion-accent", hex: "#F9C846" },
  { name: "ion-success", hex: "#3BB273" },
  { name: "ion-error", hex: "#E35D6A" },
  { name: "ion-warning", hex: "#F9C846" },
];

const StyleGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-ion-navy">🎨 ION Brand Style Guide</h1>

      {/* Color Palette */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Warna Brand</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {colors.map((color) => (
            <div key={color.name} className="text-center">
              <div
                className={`w-full h-20 rounded-lg border`}
                style={{ backgroundColor: color.hex }}
              />
              <p className="mt-2 text-sm font-mono">{color.name}</p>
              <p className="text-xs text-gray-600">{color.hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contoh Tombol</h2>
        <div className="space-x-4">
          <button className="bg-ion-green text-white px-4 py-2 rounded hover:bg-ion-green-dark transition">
            Primary Green
          </button>
          <button className="bg-ion-navy text-white px-4 py-2 rounded hover:bg-ion-navy-dark transition">
            Primary Navy
          </button>
          <button className="bg-ion-accent text-black px-4 py-2 rounded hover:brightness-110 transition">
            Accent
          </button>
        </div>
      </section>

      {/* Badge / Label */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Label / Status</h2>
        <div className="space-x-4">
          <span className="bg-ion-success text-white px-3 py-1 rounded-full text-sm">Success</span>
          <span className="bg-ion-error text-white px-3 py-1 rounded-full text-sm">Error</span>
          <span className="bg-ion-warning text-black px-3 py-1 rounded-full text-sm">Warning</span>
        </div>
      </section>

      {/* Typography Preview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-ion-navy">Heading 1</h1>
          <h2 className="text-3xl font-bold text-ion-navy-light">Heading 2</h2>
          <p className="text-lg text-gray-700">Ini adalah contoh paragraf body text menggunakan font Open Sans.</p>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;
