import React from 'react';

const EventsPage: React.FC = () => {
  return (
    <div className='pt-16 bg-white'>
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="  font-bold text-gray-900 text-3xl">Etklinlikler</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
      UniHub olarak, öğrencilerin kişisel gelişimlerine katkı sağlamak ve sektörel bilgi birikimlerini artırmak amacıyla çeşitli etkinlikler düzenliyoruz.  

</p>
    </header>

    <ul className="mt-8 grid gap-4   lg:grid-cols-3">
      <li>
      <a href="#" className="group rounded-md relative block overflow-hidden">

<img
  src="https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""
  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
/>

<div className="relative border border-gray-100 bg-white p-6">
  <span className="bg-red-200 px-3 py-1.5 text-black rounded-full text-xs font-medium whitespace-nowrap"> Panel </span>

  <h3 className="mt-4 text-lg font-medium text-gray-900">Girişimcilik Paneli</h3>

  <p className="mt-1.5 text-sm text-gray-700">Üniversite öğrencileri, önde gelen firmalarla tanışma ve staj başvurusu yapma fırsatı bulacak. Katılımcılar, iş dünyasının temsilcileriyle yüz yüze görüşmeler gerçekleştirebilecek.

</p>

  <p className="mt-1.5 text-sm text-gray-700">15 Mart 2025</p>

 
</div>
</a>

      </li>

      <li>
      <a href="#" className="group rounded-md relative block overflow-hidden">

<img
  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""
  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
/>

<div className="relative border border-gray-100 bg-white p-6">
  <span className="bg-red-200 px-3 py-1.5 text-black rounded-full text-xs font-medium whitespace-nowrap"> Fuar </span>

  <h3 className="mt-4 text-lg font-medium text-gray-900">Kariyer Fuarı ve Staj İmkanları
  </h3>
  <p className="mt-1.5 text-sm text-gray-700"> Üniversite öğrencileri, önde gelen firmalarla tanışma ve staj başvurusu yapma fırsatı bulacak. Katılımcılar, iş dünyasının temsilcileriyle yüz yüze görüşmeler gerçekleştirebilecek.

</p>
  <p className="mt-1.5 text-sm text-gray-700"> 25 Mayıs 2025
  </p>

 
</div>
</a>

      </li>

   

      <li>
      <a href="#" className="group rounded-md relative block overflow-hidden">

<img
  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""
  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
/>

<div className="relative border border-gray-100 bg-white p-6">
  <span className="bg-red-200 px-3 py-1.5 text-black rounded-full text-xs font-medium whitespace-nowrap"> Workshop </span>

  <h3 className="mt-4 text-lg font-medium text-gray-900">Yaratıcı Yazarlık Workshop’u</h3>
  <p className="mt-1.5 text-sm text-gray-700">Yaratıcı yazarlık tutkunları için düzenlenen bu workshop, katılımcıların yazma becerilerini geliştirmelerine yardımcı olacak. Katılımcılar, profesyonel yazarlarla birlikte yazma tekniklerini keşfedecek ve yaratıcı projeler üzerinde çalışacak.


</p>
  <p className="mt-1.5 text-sm text-gray-700">10 Nisan 2025
  </p>

 
</div>
</a>

      </li>
    </ul>
  </div>
</section>
    </div>
  );
};

export default EventsPage;