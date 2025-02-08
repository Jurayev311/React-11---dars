import React from "react";
import { useNavigate } from "react-router-dom";
import emptyProduct from "../../assets/empty.gif";

const Empty = () => {

    const homeNavigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="rounded-lg p-6 text-center max-w-sm">
        <img src={emptyProduct} alt="Empty Wishlist" className="w-96 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">Wishlist bo‘sh!</h2>
        <p className="text-gray-500 mt-2">Hozircha hech narsa qo‘shilmagan. Yoqtirgan narsalaringizni saqlang!</p>
        <button onClick={() => homeNavigate('/')} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Bosh sahifaga o'tish!
        </button>
      </div>
    </div>
  );
};

export default Empty;
