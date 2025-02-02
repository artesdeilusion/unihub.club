import React from 'react';

const GirisimcilikPaneliPage: React.FC = () => {
  return (
    <div className='bg-white pt-16'>
   <div className="p-5 mx-auto sm:p-10 md:p-16  ">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white border-2 border-black text-black">
			<div className="space-y-2">
				<div rel="noopener noreferrer"   className="inline-block text-2xl font-semibold sm:text-3xl">Girişimcilik Paneli</div>
				<p className="text-xs text-gray-400"> 
        15 Mart 2025
				</p>
			</div>
			<div className=" ">
				<p>Üniversite öğrencileri, önde gelen firmalarla tanışma ve staj başvurusu yapma fırsatı bulacak. Katılımcılar, iş dünyasının temsilcileriyle yüz yüze görüşmeler gerçekleştirebilecek.</p>
			</div>
		</div>
	</div>
</div>
    </div>
  );
};

export default GirisimcilikPaneliPage;