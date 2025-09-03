import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function InnoVTOL3Page() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section - точное соответствие макету Figma */}
        <header className="relative w-full h-screen overflow-hidden">
          {/* Фоновое изображение из Figma с эффектом параллакса */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000 ease-out hover:scale-100"
            style={{
              backgroundImage: 'url(/images/fon.png)',
              backgroundAttachment: 'fixed'
            }}
          />
          
          {/* Дополнительный градиентный оверлей для лучшей читаемости текста */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
          
          {/* Сетка координат как в макете Figma */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Сетка из белых "+" символов */}
            <div className="absolute top-20 left-20 text-white/30 text-sm">+</div>
            <div className="absolute top-40 right-32 text-white/30 text-sm">+</div>
            <div className="absolute top-60 left-1/4 text-white/30 text-sm">+</div>
            <div className="absolute top-80 right-1/3 text-white/30 text-sm">+</div>
            <div className="absolute top-1/3 left-16 text-white/30 text-sm">+</div>
            <div className="absolute top-1/3 right-16 text-white/30 text-sm">+</div>
            <div className="absolute top-2/3 left-20 text-white/30 text-sm">+</div>
            <div className="absolute top-2/3 right-24 text-white/30 text-sm">+</div>
            <div className="absolute bottom-40 left-1/3 text-white/30 text-sm">+</div>
            <div className="absolute bottom-60 right-1/4 text-white/30 text-sm">+</div>
            <div className="absolute bottom-80 left-1/2 text-white/30 text-sm">+</div>
            <div className="absolute bottom-20 right-1/2 text-white/30 text-sm">+</div>
          </div>
          
          {/* Темный оверлей как в макете */}
          <div className="absolute inset-0 bg-black/43" />
          
          {/* Градиентный оверлей снизу для плавного перехода */}
          <div 
            className="absolute bottom-0 left-0 w-full h-2/3"
            style={{
              background: 'linear-gradient(180deg, #0E171B 0%, rgba(14, 23, 27, 0.8) 30%, rgba(0, 0, 0, 0) 100%)'
            }}
          />
          
          {/* Логотип УНИВЕРСИТЕТ ИННОПОЛИС - правый верхний угол */}
          <div className="absolute top-8 right-8 z-10">
            <div className="text-white font-semibold text-lg tracking-wide">
              УНИВЕРСИТЕТ ИННОПОЛИС
            </div>
          </div>
          
          {/* Центральный контент */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        {/* Изображение дрона InnoVTOL-3 - центральный элемент */}
            <div className="relative mb-8 group">
              {/* Основное изображение дрона */}
              <img 
                src="/images/dron1.png" 
                alt="InnoVTOL-3 Drone" 
                className="w-[20rem] sm:w-[28rem] lg:w-[32rem] h-auto drop-shadow-2xl animate-float transition-all duration-500 group-hover:scale-110"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                }}
              />
              
              {/* Светящийся эффект вокруг дрона */}
              <div className="absolute inset-0 w-[20rem] sm:w-[28rem] lg:w-[32rem] h-auto">
                <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>
              
              {/* Дополнительные световые эффекты */}
              <div className="absolute -inset-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-transparent to-blue-400/30 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Название InnoVTOL-3 - точное позиционирование как в макете */}
            <h1 
              className="text-white font-bold leading-tight mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 6.25rem)', // Адаптивный размер для мобильных
                lineHeight: '1.21', // 121px в макете
                fontFamily: 'Inter, sans-serif'
              }}
            >
              InnoVTOL-3
            </h1>
            
            {/* Описание на русском языке - как в макете */}
            <p 
              className="text-white max-w-4xl mx-auto leading-relaxed px-4"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.875rem)', // Адаптивный размер для мобильных
                lineHeight: '1.23', // 37px в макете
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '500'
              }}
            >
              Беспилотный аппарат вертикального взлёта и посадки (VTOL) для задач доставки и мониторинга больших территорий
            </p>
            
            {/* Кнопка Demo Flight */}
            <div className="mt-12 px-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  href="#tasks" 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm sm:text-base transition-colors shadow-lg"
                >
                  Задачи
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="#lidar-scanning" 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm sm:text-base transition-colors shadow-lg"
                >
                  LiDAR
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="#advantages" 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm sm:text-base transition-colors shadow-lg"
                >
                  Преимущества
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="#demo" 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full text-base sm:text-lg transition-colors shadow-lg"
                >
                  Demo Flight
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>

                 {/* Features Section - точное соответствие макету Figma */}
         <section className="py-20 bg-white" id="features">
           <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
               {/* Левая панель - Функционал и возможности */}
               <div>
                 <h2 className="text-4xl font-bold text-blue-600 mb-12">
                   Функционал и возможности
                 </h2>
                 
                 <div className="space-y-6">
                   {[
                     "Система автоматического управления (автоматический взлет, движение по миссии и посадка)",
                     "Возможность автоматического полета по заданному маршруту",
                     "Возможность зависания над точкой интереса",
                     "Система мониторинга данных телеметрии",
                     "Функция ручного управления",
                     "Вертикальный взлет и посадка",
                     "Наличие логирования полета",
                     "Система захвата и сброса груза",
                     "Поддержка камер/лидаров"
                   ].map((feature, index) => (
                     <div key={index} className="flex items-start gap-4">
                       <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                       <p className="text-gray-700 leading-relaxed">{feature}</p>
                     </div>
                   ))}
                 </div>
                 
                                   {/* Демо-полет с QR кодом */}
                  <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center">
                        <img 
                          src="/images/QRcode.png" 
                          alt="QR код для демо-полета" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-blue-600 font-semibold text-lg">Демо-полёт</h3>
                        <p className="text-gray-600 text-sm">Отсканируйте для доступа</p>
                      </div>
                    </div>
                  </div>
               </div>
               
                               {/* Правая панель - Радиолокационные круги */}
                <div className="relative">
                  <div className="relative h-80 flex items-center justify-center">
                    {/* Радиолокационные круги с анимацией */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="w-80 h-80 border-2 border-blue-500/80 rounded-full"
                        style={{
                          animation: 'radar-pulse 2s ease-in-out infinite'
                        }}
                      ></div>
                      <div 
                        className="absolute w-64 h-64 border-2 border-blue-400/70 rounded-full"
                        style={{
                          animation: 'radar-pulse 2s ease-in-out infinite 0.5s'
                        }}
                      ></div>
                      <div 
                        className="absolute w-48 h-48 border-2 border-blue-300/60 rounded-full"
                        style={{
                          animation: 'radar-pulse 2s ease-in-out infinite 1s'
                        }}
                      ></div>
                    </div>
                    
                    {/* Центральная точка с пульсацией */}
                    <div 
                      className="relative z-10 w-6 h-6 bg-blue-600 rounded-full shadow-lg"
                      style={{
                        animation: 'center-pulse 1.5s ease-in-out infinite'
                      }}
                    ></div>
                  </div>
                </div>
             </div>
           </div>
                             </section>

          {/* Solvable Tasks Section - Решаемые задачи */}
          <section className="py-20 bg-gray-50" id="tasks">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Левая панель - Решаемые задачи */}
                <div>
                  <h2 className="text-4xl font-bold text-blue-600 mb-12">
                    Решаемые задачи
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Левая колонка */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Инспекция линейных объектов (нефтепроводы, ЛЭП)</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Создание цифровых моделей местности с помощью лидара</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Аэрофотосъемка</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Мониторинг территорий</p>
                      </div>
                    </div>

                    {/* Правая колонка */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Инспекция промышленных объектов</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Охрана больших территорий</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Воздушная перевозка грузов</p>
                      </div>
                    </div>
                  </div>

                  {/* Дополнительные задачи с указателями */}
                  <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">Специализированные задачи</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 text-xs font-bold">Л</span>
                        </div>
                        <p className="text-gray-700">Таксация леса</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 text-xs font-bold">Ф</span>
                        </div>
                        <p className="text-gray-700">Фотограмметрия</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 text-xs font-bold">В</span>
                        </div>
                        <p className="text-gray-700">ВЛС съёмка</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                                 {/* Правая панель - Информационная панель */}
                 <div className="relative">
                   <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 p-8 flex items-center justify-center">
                     <div className="text-center max-w-sm">
                       <div className="w-20 h-20 bg-blue-200 rounded-xl mx-auto mb-6 flex items-center justify-center">
                         <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                         </svg>
                       </div>
                       <h3 className="text-xl font-semibold text-blue-600 mb-4">Возможности InnoVTOL-3</h3>
                       <div className="space-y-3 text-sm text-gray-600">
                         <p>• Инспекция линейных объектов</p>
                         <p>• Создание цифровых моделей местности</p>
                         <p>• Аэрофотосъемка и мониторинг</p>
                         <p>• Специализированные задачи</p>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </section>

                     {/* Digital Terrain Models Section - Создание цифровых моделей местности */}
           <section className="py-20 bg-gray-900" id="terrain-models">
             <div className="container">
               <div className="grid lg:grid-cols-2 gap-16 items-start">
                 {/* Левая панель - Возможности цифрового моделирования */}
                 <div>
                   <h2 className="text-4xl font-bold text-blue-400 mb-12">
                     Создание цифровых моделей местности
                   </h2>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Карточка 1 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
                       <p className="text-gray-300 text-sm">Возможность установки нескольких камер + лидара</p>
                     </div>

                     {/* Карточка 2 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">2</div>
                       <p className="text-gray-300 text-sm">Покрытие до 10 кв. км в час с разрешением 10 см/пикс</p>
                     </div>

                     {/* Карточка 3 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">3</div>
                       <p className="text-gray-300 text-sm">Полёты на низкой высоте &lt;100 м</p>
                     </div>

                     {/* Карточка 4 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">4</div>
                       <p className="text-gray-300 text-sm">Протяженность маршрута до 300 км</p>
                     </div>

                     {/* Карточка 5 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">5</div>
                       <p className="text-gray-300 text-sm">Получение цифровых моделей местности</p>
                     </div>

                     {/* Карточка 6 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">6</div>
                       <p className="text-gray-300 text-sm">Автоматическое определение смазов во время полёта</p>
                     </div>
                   </div>
                 </div>
                 
                 {/* Правая панель - Архитектурный комплекс building.png */}
                 <div className="relative">
                   <div className="relative h-96 rounded-2xl overflow-hidden">
                     <img 
                       src="/images/building.png" 
                       alt="Архитектурный комплекс - цифровая модель местности" 
                       className="w-full h-full object-cover"
                     />
                     {/* Градиентный оверлей для лучшей читаемости */}
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                   </div>
                 </div>
               </div>
             </div>
           </section>

           {/* Autonomous LiDAR Scanning Section - Автономное лидарное сканирование */}
           <section className="py-20 bg-white" id="lidar-scanning">
             <div className="container">
               <div className="grid lg:grid-cols-2 gap-16 items-start">
                 {/* Левая панель - Автономное лидарное сканирование */}
                 <div>
                   <h2 className="text-4xl font-bold text-blue-600 mb-12">
                     <span className="text-blue-600">Автономное лидарное</span> сканирование
                   </h2>
                   
                   <div className="space-y-6">
                     {/* Карточка 1 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">1</div>
                       <p className="text-gray-700 leading-relaxed">Система на базе лидаров Livox Avia / Ouster / Velodyne</p>
                     </div>

                     {/* Карточка 2 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">2</div>
                       <p className="text-gray-700 leading-relaxed">Фильтрация облака в реальном времени (подвижные объекты, шумы)</p>
                     </div>

                     {/* Карточка 3 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">3</div>
                       <p className="text-gray-700 leading-relaxed">Площадь покрытия до 1000 Га/час при 50% перекрытии</p>
                     </div>

                     {/* Карточка 4 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">4</div>
                       <p className="text-gray-700 leading-relaxed">Автоматическое сшивание и коррекция облака точек</p>
                     </div>

                     {/* Карточка 5 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">5</div>
                       <p className="text-gray-700 leading-relaxed">Плотность 30 пикселей на метр при высоте 120 м и скорости 80 км/ч</p>
                     </div>
                   </div>
                 </div>
                 
                 {/* Правая панель - LiDAR Building изображение */}
                 <div className="relative">
                   <div className="relative h-96 rounded-2xl overflow-hidden">
                     <img 
                       src="/images/LiDarBuilding.png" 
                       alt="LiDAR сканирование зданий - 3D облако точек" 
                       className="w-full h-full object-cover"
                     />
                     {/* Градиентный оверлей для лучшей читаемости */}
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
                     {/* Логотип УНИВЕРСИТЕТ ИННОПОЛИС */}
                     <div className="absolute top-4 right-4">
                       <div className="bg-white/90 rounded-lg px-3 py-2">
                         <div className="flex items-center gap-2">
                           <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                             <span className="text-white text-xs font-bold">IU</span>
                           </div>
                           <span className="text-gray-800 text-sm font-medium">УНИВЕРСИТЕТ ИННОПОЛИС</span>
                         </div>
                       </div>
                     </div>
                                           {/* QR код */}
                      <div className="absolute bottom-4 right-4">
                        <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                          <img 
                            src="/images/QRcode.png" 
                            alt="QR код для LiDAR сканирования" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>

           {/* Advantages Section - Преимущества */}
          <section className="py-20 bg-gray-50" id="advantages">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Левая панель - Преимущества */}
                <div>
                  <h2 className="text-4xl font-bold text-blue-600 mb-12">
                    Преимущества
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Собственная электроника */}
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Собственная электроника</h3>
                      <p className="text-gray-600 text-sm">Разработанная специально для InnoVTOL-3</p>
                    </div>

                    {/* Российское ПО */}
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Российское ПО</h3>
                      <p className="text-gray-600 text-sm">Национальная система управления</p>
                    </div>

                    {/* Настраиваемые модули */}
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Настраиваемые модули</h3>
                      <p className="text-gray-600 text-sm">Гибкая конфигурация под задачи</p>
                    </div>

                    {/* Гибкая интеграция */}
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Гибкая интеграция</h3>
                      <p className="text-gray-600 text-sm">Различной полезной нагрузки</p>
                    </div>

                    {/* Техподдержка */}
                    <div className="p-6 bg-white rounded-2xl shadow-lg">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Техподдержка</h3>
                      <p className="text-gray-600 text-sm">Профессиональная помощь 24/7</p>
                    </div>
                  </div>
                </div>
                
                {/* Правая панель - Аэрофотоснимок полей */}
                <div className="relative">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <img 
                      src="/images/fon2.png" 
                      alt="Сельскохозяйственные поля" 
                      className="w-full h-full object-cover"
                    />
                    {/* Градиентный оверлей для лучшей читаемости */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Effects Section - Эффекты от внедрения */}
          <section className="py-20 bg-white" id="effects">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Левая панель - Эффекты от внедрения */}
                <div>
                  <h2 className="text-4xl font-bold text-blue-600 mb-12">
                    Эффекты от внедрения
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Время полёта */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">до 5 часов</div>
                      <p className="text-gray-700">время полёта</p>
                    </div>

                    {/* Быстрее съёмки */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">до x8</div>
                      <p className="text-gray-700">быстрее съёмки с квадрокоптера</p>
                    </div>

                    {/* Время развёртывания */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">до 15 мин</div>
                      <p className="text-gray-700">время развёртывания комплекса</p>
                    </div>

                    {/* Площадь ортофото */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">до 10 км²/час</div>
                      <p className="text-gray-700">площадь ортофото при 10 см/пикс</p>
                    </div>

                    {/* Путь за полёт */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">до 300 км</div>
                      <p className="text-gray-700">пути за 1 полёт</p>
                    </div>

                    {/* Масса полезной нагрузки */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">до 5 кг</div>
                      <p className="text-gray-700">масса полезной нагрузки</p>
                    </div>
                  </div>
                </div>
                
                {/* Правая панель - Схематический вид дрона dron4.png */}
                <div className="relative">
                  <div className="relative h-96 flex items-center justify-center">
                    <img 
                      src="/images/dron4.png" 
                      alt="InnoVTOL-3 Схематический вид" 
                      className="w-full h-auto max-h-full drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

                  {/* Specifications Section - точное соответствие макету Figma */}
         <section className="py-20 bg-gray-50" id="specs">
           <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
               {/* Левая панель - Характеристики */}
               <div>
                 <h2 className="text-4xl font-bold text-blue-600 mb-12">
                   Характеристики InnoVTOL-3
                 </h2>
                 
                                   {/* Схема дрона dron3.png */}
                  <div className="mb-8">
                    <img 
                      src="/images/dron3.png" 
                      alt="InnoVTOL-3 Schematic" 
                      className="w-90 h-auto mx-auto drop-shadow-lg"
                    />
                  </div>
                 
                 {/* Технические характеристики */}
                 <div className="space-y-4">
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">3 м</span>
                     <span className="text-gray-700">Размах крыла</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">до 5 ч</span>
                     <span className="text-gray-700">Время полёта</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">до 30 кг</span>
                     <span className="text-gray-700">Максимальный взлетный вес</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">до 300 км</span>
                     <span className="text-gray-700">Протяженность полёта</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">до 5 кг</span>
                     <span className="text-gray-700">Масса перевозимого груза</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">80 км/ч</span>
                     <span className="text-gray-700">Крейсерская скорость</span>
                   </div>
                 </div>
                 
                 {/* Назначение */}
                 <div className="mt-8 p-4 bg-white rounded-xl">
                   <h3 className="font-semibold text-gray-800 mb-2">Назначение беспилотного аппарата</h3>
                   <p className="text-gray-700">Доставка грузов, мониторинг</p>
                 </div>
                 
                 {/* Силовая установка */}
                 <div className="mt-4 p-4 bg-white rounded-xl">
                   <h3 className="font-semibold text-gray-800 mb-2">Силовая установка</h3>
                   <p className="text-gray-700">Электрические подъемные моторы, бензиновый маршевый двигатель (3,5 л.с.)</p>
                 </div>
                 
                 {/* Погодные условия */}
                 <div className="mt-4 p-4 bg-white rounded-xl">
                   <h3 className="font-semibold text-gray-800 mb-2">Погодные условия эксплуатации</h3>
                   <div className="space-y-2 text-gray-700">
                     <p><strong>Температурно-эксплуатационный диапазон:</strong> -20°C...+40°C</p>
                     <p><strong>Ветер:</strong> до 13 м/с при взлёте, до 20 м/с в воздухе</p>
                     <p><strong>Желательно:</strong> отсутствие осадков</p>
                   </div>
                 </div>
               </div>
               
               {/* Правая панель - Пейзаж с летящим дроном */}
               <div className="relative">
                 <div className="relative h-96 rounded-2xl overflow-hidden">
                                       {/* Фоновое изображение fon2.png */}
                    <img 
                      src="/images/fon2.png" 
                      alt="Landscape" 
                      className="w-full h-full object-cover"
                    />
                 </div>
               </div>
             </div>
           </div>
         </section>

                 {/* Demo Section - на русском языке */}
         <section className="py-20 bg-white" id="demo">
           <div className="container text-center">
             <h2 className="text-4xl font-bold text-blue-600 mb-8">
               Демо-полёт
             </h2>
                           <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8">
                <div className="w-32 h-32 rounded-lg overflow-hidden mx-auto mb-4">
                  <img 
                    src="/images/QRcode.png" 
                    alt="QR код для демо-полета InnoVTOL-3" 
                    className="w-full h-full object-cover"
                  />
                </div>
               <p className="text-gray-600 mb-4">Отсканируйте для доступа к демо-полёту</p>
               <Link 
                 href="/" 
                 className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-full transition-colors"
               >
                 Вернуться к InnoSpector
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                 </svg>
               </Link>
             </div>
           </div>
         </section>
      </main>
    </>
  );
}
