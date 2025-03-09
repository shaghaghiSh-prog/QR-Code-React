import { useState } from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQrValue(inputValue)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="qr-input" className="block text-sm font-medium text-gray-700 mb-2">
          Enter URL or text for QR code:
        </label>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            id="qr-input"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ur web ...!"
          />
          <button
            type="submit"
            className="bg-blue-500 w-fit content-center justify-center self-center text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            create
          </button>
        </div>
      </form>
      {qrValue && (
        <div className="flex flex-col items-center mt-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <QRCode value={qrValue} size={200} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Scan this QR code to open: <br />
            <span className="font-medium break-all">{qrValue}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default QRCodeGenerator;