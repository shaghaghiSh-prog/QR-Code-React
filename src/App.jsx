import QRCodeGenerator from "./Components/QRCodeGenerator";


 function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">QR Code Generator</h1>
      <QRCodeGenerator />
    </main>
  )
}

export default Home;