import React from 'react';
import LargeServiceCard from './components/LargeServiceCard.jsx';
import RegularServiceCard from './components/RegularServiceCard.jsx';
import './App.css';
// import icon1 from './icons/icon1.png'; // Замените на реальные пути к вашим иконкам
// import icon2 from './icons/icon2.png';
// import icon3 from './icons/icon3.png';
// import icon4 from './icons/icon4.png';
// import icon5 from './icons/icon5.png';
// import icon6 from './icons/icon6.png';

function App() {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item big">
          <LargeServiceCard 
            title="Виртуальные серверы" 
            description="Вычислительные ресурсы в облаке для высокой доступности цифровых сервисов любой сложности" 
           // icon={icon1} 
          />
        </div>
        <div className="grid-item">
          <RegularServiceCard 
            title="Виртуальные сети" 
            description="Объединение серверов в локальных сетях, Public и Private DNS, VPN, распределение нагрузки и фильтрация трафика" 
            //icon={icon2} 
          />
        </div>
        <div className="grid-item">
          <RegularServiceCard 
            title="Объектное хранилище" 
            description="Неограниченное хранение и передача массива данных по S3 API. Обработка тысяч запросов в секунду" 
            //icon={icon3} 
          />
        </div>
        <div className="grid-item">
          <RegularServiceCard 
            title="Кластеры Kubernetes" 
            description="Автомасштабирование и ускорение доставки приложений с Kubernetes как сервис, сертифицированным CNCF" 
            //icon={icon4} 
          />
        </div>
        <div className="grid-item">
          <RegularServiceCard 
            title="Базы данных в облаке" 
            description="Стабильность работы и высокая доступность управляемых СУБД. Быстрый запуск готового сервиса" 
            //icon={icon5} 
          />
        </div>
        <div className="grid-item big">
          <LargeServiceCard 
            title="Большие данные" 
            description="Обработка и анализ больших данных с облачной инфраструктурой на базе Apache Hadoop, Spark, ClickHouse" 
            //icon={icon6} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
