import React from "react";
import files from "./files";

// PhotoListItem bileşeni oluşturup, files array kullanarak görüntülemeye çalışın. Verileri bir prop olarak geçirin ve görüntüleyin


// PhotoListItem bileşeni
//Bu bileşen, her bir fotoğraf öğesini temsil eder ve bu öğelerin görüntüsünü ve metin bilgilerini içerir. source, title ve size prop'ları ile bu bilgileri alır.


function PhotoListItem({source,title,size}){
  return(
    <li className="relative">
      <div className="group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={source}
              alt=""
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {title}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {size}
          </p>
        </li>
      );
}

//PhotoList bileşeni
//files dizisinin her bir öğesi için map fonksiyonu kullanılarak PhotoListItem bileşeni oluşturuldu.
//Her bir öğe, key özelliği ile belirtilen bir anahtar ve {}...file} ile dosya verilerini içeren prop'lara sahip bir PhotoListItem bileşeni olarak render edildi.
function PhotoList() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <PhotoListItem key={file.source} {...file}/>
      ))}
      </ul>
  );
}

export default function App() {
  return (
    <div className="bg-purple-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PhotoList />
      </div>
    </div>
  );
}
