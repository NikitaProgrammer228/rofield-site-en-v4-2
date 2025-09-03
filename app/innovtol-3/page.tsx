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
            
            {/* Description in English */}
            <p 
              className="text-white max-w-4xl mx-auto leading-relaxed px-4"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.875rem)', // Адаптивный размер для мобильных
                lineHeight: '1.23', // 37px в макете
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '500'
              }}
            >
              Unmanned aerial vehicle with vertical take-off and landing (VTOL) for delivery and monitoring of large territories
            </p>
            
            {/* Кнопка Demo Flight */}
            <div className="mt-12 px-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  href="#tasks" 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm sm:text-base transition-colors shadow-lg"
                >
                  Tasks
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
                  Advantages
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

                 {/* Features Section - Features and Capabilities */}
         <section className="py-20 bg-white" id="features">
           <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
               {/* Left Panel - Features and Capabilities */}
               <div>
                 <h2 className="text-4xl font-bold text-blue-600 mb-12">
                   Features and Capabilities
                 </h2>
                 
                 <div className="space-y-6">
                   {[
                     "Automatic control system (automatic takeoff, mission flight and landing)",
                     "Automatic flight capability along a given route",
                     "Hovering capability over a point of interest",
                     "Telemetry data monitoring system",
                     "Manual control function",
                     "Vertical take-off and landing",
                     "Flight logging capability",
                     "Cargo capture and release system",
                     "Camera/LiDAR support"
                   ].map((feature, index) => (
                     <div key={index} className="flex items-start gap-4">
                       <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                       <p className="text-gray-700 leading-relaxed">{feature}</p>
                     </div>
                   ))}
                 </div>
                 
                                   {/* Demo Flight with QR Code */}
                  <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center">
                        <img 
                          src="/images/QRcode.png" 
                          alt="QR code for demo flight" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-blue-600 font-semibold text-lg">Demo Flight</h3>
                        <p className="text-gray-600 text-sm">Scan to access</p>
                      </div>
                    </div>
                  </div>
               </div>
               
                               {/* Right Panel - Radar Circles */}
                <div className="relative">
                  <div className="relative h-80 flex items-center justify-center">
                    {/* Radar circles with animation */}
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
                    
                    {/* Central pulsing point */}
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

          {/* Solvable Tasks Section - Solvable Tasks */}
          <section className="py-20 bg-gray-50" id="tasks">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Panel - Solvable Tasks */}
                <div>
                  <h2 className="text-4xl font-bold text-blue-600 mb-12">
                    Solvable Tasks
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Linear object inspection (pipelines, power lines)</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Digital terrain modeling using LiDAR</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Aerial photography</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Territory monitoring</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Industrial facility inspection</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Large territory security</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">Air cargo transportation</p>
                      </div>
                    </div>
                  </div>

                  {/* Specialized Tasks */}
                  <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">Specialized Tasks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 text-xs font-bold">F</span>
                        </div>
                        <p className="text-gray-700">Forest inventory</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 text-xs font-bold">P</span>
                        </div>
                        <p className="text-gray-700">Photogrammetry</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-600 text-xs font-bold">V</span>
                        </div>
                        <p className="text-gray-700">VLS survey</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                                 {/* Right Panel - Information Panel */}
                 <div className="relative">
                   <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 p-8 flex items-center justify-center">
                     <div className="text-center max-w-sm">
                       <div className="w-20 h-20 bg-blue-200 rounded-xl mx-auto mb-6 flex items-center justify-center">
                         <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                         </svg>
                       </div>
                       <h3 className="text-xl font-semibold text-blue-600 mb-4">InnoVTOL-3 Capabilities</h3>
                       <div className="space-y-3 text-sm text-gray-600">
                         <p>• Linear object inspection</p>
                         <p>• Digital terrain modeling</p>
                         <p>• Aerial photography and monitoring</p>
                         <p>• Specialized tasks</p>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </section>

                     {/* Digital Terrain Models Section - Digital Terrain Modeling */}
           <section className="py-20 bg-gray-900" id="terrain-models">
             <div className="container">
               <div className="grid lg:grid-cols-2 gap-16 items-start">
                 {/* Left Panel - Digital Terrain Modeling Capabilities */}
                 <div>
                   <h2 className="text-4xl font-bold text-blue-400 mb-12">
                     Digital Terrain Modeling
                   </h2>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {/* Card 1 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
                       <p className="text-gray-300 text-sm">Multiple camera + LiDAR installation capability</p>
                     </div>

                     {/* Card 2 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">2</div>
                       <p className="text-gray-300 text-sm">Coverage up to 10 sq. km per hour with 10 cm/pixel resolution</p>
                     </div>

                     {/* Card 3 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">3</div>
                       <p className="text-gray-300 text-sm">Low altitude flights &lt;100 m</p>
                     </div>

                     {/* Card 4 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">4</div>
                       <p className="text-gray-300 text-sm">Route length up to 300 km</p>
                     </div>

                     {/* Card 5 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">5</div>
                       <p className="text-gray-300 text-sm">Digital terrain model generation</p>
                     </div>

                     {/* Card 6 */}
                     <div className="p-6 bg-gray-800 rounded-2xl border border-gray-700">
                       <div className="text-2xl font-bold text-blue-400 mb-2">6</div>
                       <p className="text-gray-300 text-sm">Automatic overlap detection during flight</p>
                     </div>
                   </div>
                 </div>
                 
                 {/* Right Panel - Building complex building.png */}
                 <div className="relative">
                   <div className="relative h-96 rounded-2xl overflow-hidden">
                     <img 
                       src="/images/building.png" 
                       alt="Building complex - digital terrain model" 
                       className="w-full h-full object-cover"
                     />
                     {/* Gradient overlay for better readability */}
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                   </div>
                 </div>
               </div>
             </div>
           </section>

           {/* Autonomous LiDAR Scanning Section - Autonomous LiDAR Scanning */}
           <section className="py-20 bg-white" id="lidar-scanning">
             <div className="container">
               <div className="grid lg:grid-cols-2 gap-16 items-start">
                 {/* Left Panel - Autonomous LiDAR Scanning */}
                 <div>
                   <h2 className="text-4xl font-bold text-blue-600 mb-12">
                     <span className="text-blue-600">Autonomous LiDAR</span> Scanning
                   </h2>
                   
                   <div className="space-y-6">
                     {/* Card 1 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">1</div>
                       <p className="text-gray-700 leading-relaxed">LiDAR system based on Livox Avia / Ouster / Velodyne</p>
                     </div>

                     {/* Card 2 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">2</div>
                       <p className="text-gray-700 leading-relaxed">Real-time cloud filtering (moving objects, noise)</p>
                     </div>

                     {/* Card 3 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">3</div>
                       <p className="text-gray-700 leading-relaxed">Coverage area up to 1000 Ha/hour with 50% overlap</p>
                     </div>

                     {/* Card 4 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">4</div>
                       <p className="text-gray-700 leading-relaxed">Automatic point cloud stitching and correction</p>
                     </div>

                     {/* Card 5 */}
                     <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                       <div className="text-3xl font-bold text-blue-600 mb-3">5</div>
                       <p className="text-gray-700 leading-relaxed">Density 30 pixels per meter at 120 m height and 80 km/h speed</p>
                     </div>
                   </div>
                 </div>
                 
                                   {/* Right Panel - LiDAR Building image */}
                  <div className="relative">
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                      <img 
                        src="/images/LiDarBuilding.png" 
                        alt="LiDAR building scanning - 3D point cloud" 
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay for better readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
                      {/* INNOPOLIS UNIVERSITY Logo */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">IU</span>
                            </div>
                            <span className="text-gray-800 text-sm font-medium">INNOPOLIS UNIVERSITY</span>
                          </div>
                        </div>
                      </div>
                                            {/* QR Code */}
                       <div className="absolute bottom-4 right-4">
                         <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                           <img 
                             src="/images/QRcode.png" 
                             alt="QR code for LiDAR scanning" 
                             className="w-full h-full object-cover"
                           />
                         </div>
                       </div>
                    </div>
                  </div>
               </div>
             </div>
           </section>

                       {/* Advantages Section - Advantages */}
           <section className="py-20 bg-gray-50" id="advantages">
             <div className="container">
               <div className="grid lg:grid-cols-2 gap-16 items-start">
                 {/* Left Panel - Advantages */}
                 <div>
                   <h2 className="text-4xl font-bold text-blue-600 mb-12">
                     Advantages
                   </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                         {/* Own Electronics */}
                     <div className="p-6 bg-white rounded-2xl shadow-lg">
                       <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                         <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                         </svg>
                       </div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-2">Own Electronics</h3>
                       <p className="text-gray-600 text-sm">Specially developed for InnoVTOL-3</p>
                     </div>

                     {/* Russian Software */}
                     <div className="p-6 bg-white rounded-2xl shadow-lg">
                       <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                         <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                         </svg>
                       </div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-2">Russian Software</h3>
                       <p className="text-gray-600 text-sm">National control system</p>
                     </div>

                     {/* Configurable Modules */}
                     <div className="p-6 bg-white rounded-2xl shadow-lg">
                       <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                         <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                         </svg>
                       </div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-2">Configurable Modules</h3>
                       <p className="text-gray-600 text-sm">Flexible configuration for tasks</p>
                     </div>

                     {/* Flexible Integration */}
                     <div className="p-6 bg-white rounded-2xl shadow-lg">
                       <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                         <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                         </svg>
                       </div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Integration</h3>
                       <p className="text-gray-600 text-sm">Various payloads</p>
                     </div>

                     {/* Technical Support */}
                     <div className="p-6 bg-white rounded-2xl shadow-lg">
                       <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                         <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                         </svg>
                       </div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Support</h3>
                       <p className="text-gray-600 text-sm">Professional help 24/7</p>
                     </div>
                  </div>
                </div>
                
                {/* Right Panel - Aerial photo of fields */}
                <div className="relative">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <img 
                      src="/images/fon2.png" 
                      alt="Agricultural fields" 
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Effects Section - Implementation Effects */}
          <section className="py-20 bg-white" id="effects">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Panel - Implementation Effects */}
                <div>
                  <h2 className="text-4xl font-bold text-blue-600 mb-12">
                    Implementation Effects
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Flight Time */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">up to 5 hours</div>
                      <p className="text-gray-700">flight time</p>
                    </div>

                    {/* Faster Surveying */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">up to x8</div>
                      <p className="text-gray-700">faster than quadcopter surveying</p>
                    </div>

                    {/* Deployment Time */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">up to 15 min</div>
                      <p className="text-gray-700">system deployment time</p>
                    </div>

                    {/* Orthophoto Area */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">up to 10 km²/hour</div>
                      <p className="text-gray-700">orthophoto area at 10 cm/pixel</p>
                    </div>

                    {/* Flight Path */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">up to 300 km</div>
                      <p className="text-gray-700">path per flight</p>
                    </div>

                    {/* Payload Mass */}
                    <div className="p-6 bg-gray-50 rounded-2xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">up to 5 kg</div>
                      <p className="text-gray-700">payload mass</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Panel - Schematic view of drone dron4.png */}
                <div className="relative">
                  <div className="relative h-96 flex items-center justify-center">
                    <img 
                      src="/images/dron4.png" 
                      alt="InnoVTOL-3 Schematic view" 
                      className="w-full h-auto max-h-full drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

                  {/* Specifications Section - Technical Specifications */}
         <section className="py-20 bg-gray-50" id="specs">
           <div className="container">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
               {/* Left Panel - Technical Specifications */}
               <div>
                 <h2 className="text-4xl font-bold text-blue-600 mb-12">
                   InnoVTOL-3 Specifications
                 </h2>
                 
                                   {/* Drone schematic dron3.png */}
                  <div className="mb-8">
                    <img 
                      src="/images/dron3.png" 
                      alt="InnoVTOL-3 Schematic" 
                      className="w-90 h-auto mx-auto drop-shadow-lg"
                    />
                  </div>
                 
                 {/* Technical Specifications */}
                 <div className="space-y-4">
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">3 m</span>
                     <span className="text-gray-700">Wingspan</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">up to 5 h</span>
                     <span className="text-gray-700">Flight time</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">up to 30 kg</span>
                     <span className="text-gray-700">Maximum takeoff weight</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">up to 300 km</span>
                     <span className="text-gray-700">Flight range</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">up to 5 kg</span>
                     <span className="text-gray-700">Cargo weight</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-2xl font-bold text-blue-600">80 km/h</span>
                     <span className="text-gray-700">Cruising speed</span>
                   </div>
                 </div>
                 
                 {/* Purpose */}
                 <div className="mt-8 p-4 bg-white rounded-xl">
                   <h3 className="font-semibold text-gray-800 mb-2">Unmanned aerial vehicle purpose</h3>
                   <p className="text-gray-700">Cargo delivery, monitoring</p>
                 </div>
                 
                 {/* Power Plant */}
                 <div className="mt-4 p-4 bg-white rounded-xl">
                   <h3 className="font-semibold text-gray-800 mb-2">Power Plant</h3>
                   <p className="text-gray-700">Electric lift motors, gasoline cruise engine (3.5 hp)</p>
                 </div>
                 
                 {/* Weather Conditions */}
                 <div className="mt-4 p-4 bg-white rounded-xl">
                   <h3 className="font-semibold text-gray-800 mb-2">Operating weather conditions</h3>
                   <div className="space-y-2 text-gray-700">
                     <p><strong>Temperature operating range:</strong> -20°C...+40°C</p>
                     <p><strong>Wind:</strong> up to 13 m/s at takeoff, up to 20 m/s in flight</p>
                     <p><strong>Desirable:</strong> no precipitation</p>
                   </div>
                 </div>
               </div>
               
               {/* Right Panel - Landscape with flying drone */}
               <div className="relative">
                 <div className="relative h-96 rounded-2xl overflow-hidden">
                                       {/* Background image fon2.png */}
                    <img 
                      src="/images/fon2.png" 
                      alt="Landscape with flying drone" 
                      className="w-full h-full object-cover"
                    />
                 </div>
               </div>
             </div>
           </div>
         </section>

                 {/* Demo Section - Demo Flight */}
         <section className="py-20 bg-white" id="demo">
           <div className="container text-center">
             <h2 className="text-4xl font-bold text-blue-600 mb-8">
               Demo Flight
             </h2>
                           <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-8">
                <div className="w-32 h-32 rounded-lg overflow-hidden mx-auto mb-4">
                  <img 
                    src="/images/QRcode.png" 
                    alt="QR code for InnoVTOL-3 demo flight" 
                    className="w-full h-full object-cover"
                  />
                </div>
               <p className="text-gray-600 mb-4">Scan to access the demo flight</p>
               <Link 
                 href="/" 
                 className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-full transition-colors"
               >
                 Back to InnoSpector
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
