  import { Campaign,   Discount,  Event, Groups, Handshake,  Mic, Mood,   RocketLaunch, School,  } from "@mui/icons-material";
import Link from "next/dist/client/link";
   
 
 
  
 
export default function Home() {
 
  return (
   <div className="bg-white">
    <section className=" lg:pt-16 pt-8 text-black">
    <div className="flex items-center justify-center p-6 mt-20   h-72 sm:h-80   xl:h-112 2xl:h-128">
			<img src="/clubhub.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>

	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12    ">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm      ">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
				<span className="text-red-400 block">Birlikte</span> Daha Güçlü
			</h1>
<div className="max-w-lg mx-auto">
<p className="mt-6 mb-8 text-lg sm:mb-12">Burada networking etkinliklerinden şehir keşiflerine, kariyer buluşmalarından sosyal sorumluluk projelerine kadar birçok fırsat sizi bekliyor.


</p>
</div>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4  ">
 
				<a rel="noopener noreferrer" href="https://apply.unihub.club" className="px-4 py-2 rounded-full text-white bg-red-500 border border-red-500 hover:bg-red-600">Şimdi başvur!</a>
				<a rel="noopener noreferrer" href="/events" className="px-4 py-2 rounded-full border hover:bg-black hover:text-white   transition transform border-black">Tüm etkinlikler</a>
			</div>
		</div>	 
 

 	</div>
</section>
 
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6   lg:px-8">
    <header className="text-center">
      <h2 className="  font-bold text-gray-900  text-3xl">Yaklaşan Etkinlikler</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
      UniHub olarak, öğrencilerin kişisel gelişimlerine katkı sağlamak ve sektörel bilgi birikimlerini artırmak amacıyla çeşitli etkinlikler düzenliyoruz.  
      </p>
    </header>

    <ul className="mt-8 grid gap-4   lg:grid-cols-3">
      <li>
      <Link href="/event/girisimcilik-paneli" className="group rounded-md relative block overflow-hidden">

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
</Link>

      </li>

      <li>
      <Link href="#" className="group rounded-md relative block overflow-hidden">

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
</Link>

      </li>

   

      <li>
      <Link href="#" className="group rounded-md relative block overflow-hidden">

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
</Link>

      </li>
    </ul>
  </div>
</section>
     <section className="bg-red-200 max-w-screen-2xl mx-auto lg:rounded-xl my-10   ">
         <div className="mx-auto max-w-screen-xl text-center px-4 py-8 sm:px-6 lg:px-8">
           <div className="space-y-4 md:space-y-8">
             <div className="max-w-xl text-center mx-auto">
           
       
               <h2 className="text-3xl mt-10 text-center font-semibold text-gray-900  ">
                 UniHub Nedir?
               </h2>
       
               <p className=" text-xl mt-4 text-center text-black ">UniHub Club, öğrencilerin hem sosyal hem de profesyonel olarak gelişebileceği bir topluluktur. Amacımız, üniversite hayatını daha keyifli hale getirmek, öğrencilerin yeni insanlarla tanışmasını sağlamak ve kariyer yolculuklarında destek olmaktır.

</p>
       
             </div>
       
               
      
         <section className="pt-10 pb-8 mx-auto max-w-screen-xl      mdlg:pt-52 mdlg:pb-34">
                      
        <div className="container  mx-auto   text-left text-black text-text-primary grid-container">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[72px] mb-20 col-start-1 col-end-13 md:col-start-2 md:col-end-12 mdlg:col-start-1 mdlg:col-end-13">
             {[
               {
                 text: `Türkiye genelindeki üniversitelerde aktif bir öğrenci topluluğu oluşturmak.”`,
                 
                 title: "Misyonumuz",
               },
               {
                 text: `Öğrencilere değer katan etkinlikler ve projeler sunarak onların hem akademik hem de sosyal gelişimlerine katkı sağlamak.”`,
        
                 title: "Vizyonumuz",
               },
             ].map((testimonial, index) => (
               <div key={index} className="bg-brand-main  relative group no-underline"  >
                 <div className="flex rounded-md flex-col gap-8 p-10 justify-between   font-light relative z-10 bg-white border-2 border-black h-full overflow-hidden group-hover:rounded-br-[112px] transition-all">
                   <p className="text-2xl font-medium">
                       {testimonial.title}
                   </p>
                   <p className="text-xl  ">
                     <span className="pull-double">“</span>{testimonial.text}
                   </p>
                    
                 </div>
                <Mood className="absolute bottom-3 right-3 text-black" width="14" height="14" ></Mood>
               </div>
             ))}
           </div>
         </div>
         
       </section>
       
       
           </div>
         </div>
       </section>

         
        
            
<section className="xl:py-10">
                <div className="relative px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 z-0 w-full h-full bg-gray-50 rounded-2xl lg:w-3/4" />

                    </div>

                    <div className="relative text-black">
                        <h1 className="text-3xl pb-5">Neden üye olmalısın?</h1>

                        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                            <div className="grid gap-12 row-gap-5 md:grid-cols-2">

                                <div className="relative">
                                    <div className="relative">
                                        <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">

                                        <Event></Event>
                                        </div>
                                        <h6 className="mb-2 text-xl leading-5">
                                        Etkinlik ve workshop ayrıcalıkları
                                        </h6>
                                        <p className="text-sm  ">
                                        UniHub&apos;ın düzenlediği etkinliklere, seminerlere ve workshop’lara öncelikli katılım hakkı elde edersiniz.

</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <Groups></Groups>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                    Ağ kurma ve kariyer fırsatları
                                    </h6>
                                    <p className="text-sm  ">
                                    Sektör profesyonelleri ve diğer öğrencilerle tanışarak kariyerinizi geliştirme fırsatı yakalarsınız.


                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <Discount></Discount>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                    Erken erişim fırsatları
                                    </h6>
                                    <p className="text-sm  ">
                                    UniHub etkinliklerine ve özel projelere erken kayıt hakkı elde ederek, avantajlı fırsatlarla katılım sağlayabilirsiniz.

</p>
                                </div>
                                <div>
                                    <div className="flex items-center     justify-start w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                                        <School></School>
                                    </div>
                                    <h6 className="mb-2 text-xl leading-5">
                                    Özel eğitim ve seminerler
                                    </h6>
                                    <p className="text-sm  ">
                                    Üyeler, kariyer gelişimi, kişisel gelişim ve sektörel konularda düzenlenen özel eğitimlere katılma fırsatı bulur.

</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="object-cover w-full h-56 rounded-2xl shadow-lg sm:h-96"
                                    src="https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                />
                            </div>
                        </div>
<div className="mt-8">
<a className="px-4 py-2 rounded-full text-white bg-red-500 border-none hover:bg-red-600" href="https://apply.unihub.club">Şimdi başvur!</a>

    </div>                    </div>
                </div>

            </section>
            <section className="  ">
               <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                 <div className="space-y-4 md:space-y-8">
                   <div className="max-w-xl text-center mx-auto">
                   <h2 className="text-4xl font-semibold   text-gray-900  ">
             İş Birlikleri ve Sponsorluklar
                     </h2>
             
              
                     <p className="text-gray-500 mt-4 text-center dark:text-gray-400">UniHub Club olarak, markalar ve kuruluşlarla iş birliği yaparak öğrenciler için daha fazla fırsat yaratmayı hedefliyoruz. Eğer markanızı genç kitlelere ulaştırmak istiyorsanız, bizimle iletişime geçin!</p>
             
                   </div>
                    
                   <div className="px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
                  
                    <div className="grid gap-4 row-gap-5 text-black sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-200">
<Campaign></Campaign>
                                </div>
                                <h6 className="mb-2 text-lg leading-5">Öğrencilere doğrudan ulaşma fırsatı</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                Markanız, üniversite öğrencilerine doğrudan erişerek genç kitleyle güçlü bir bağ kurar.


                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-200">
                                     <RocketLaunch></RocketLaunch>
                                </div>
                                <h6 className="mb-2 text-lg leading-5">Marka bilinirliğini artırma</h6>

                                <p className="mb-3 text-sm text-gray-900">
                                     
                                Etkinlikler ve iş birlikleri sayesinde markanız daha geniş kitlelere ulaşır.



                                       </p>                    </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-200">
                                     <Mic></Mic>
                                </div>
                                <h6 className="mb-2  text-lg leading-5">Etkinliklerde özel tanıtım alanları</h6>
                                <p className="mb-3 text-sm text-gray-900">
                                Sponsorlar, etkinliklerde standlar veya promosyonlarla markalarını öne çıkarabilir.

</p>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between p-5 border rounded-2xl shadow-sm">
                            <div>
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-200">
                                    <Handshake></Handshake>
                                </div>
                                <h6 className="mb-2 text-lg leading-5">Hedef kitleyle etkileşim kurma                                </h6>
                                <p className="mb-3 text-sm text-gray-900">
                                Öğrencilerle birebir etkileşim kurarak geri bildirim alabilir ve marka bağlılığı oluşturabilirsiniz.


                                </p>
                            </div>

                        </div>

                    </div>
                 
                    <div className="  rounded-2xl   mx-auto mt-4 p-4   text-center">
                      
                        <a href="https://sponsor.unihub.club" className="px-4 py-2    rounded-full text-white bg-red-500 border-none hover:bg-red-600">İletişime geçin!</a>

                     </div>
                </div>
                 
                
             
             
                 </div>
               </div>
             </section>
 
    </div>
  );
}
