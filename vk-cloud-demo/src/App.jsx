import React from 'react';
import './App.css';
import ServiceCard from './components/ServiceCard';

const services = [
  {
    title: 'Виртуальные серверы',
    description: 'Вычислительные ресурсы в облаке для высокой доступности цифровых сервисов любой сложности',
    icon: '/icons/big_data_card.png',
    className: 'server',
  },
  {
    title: 'Виртуальные сети',
    description: 'Объединение серверов в локальных сетях, Public и Private DNS, VPN, распределение нагрузки и фильтрация трафика',
    icon: '/icons/icon2.svg',
    className: 'network',
  },
  {
    title: 'Объектное хранилище',
    description: 'Неограниченное хранение и передача массива данных по S3 API. Обработка тысяч запросов в секунду',
    icon: '/icons/icon3.svg',
    className: 'storage',
  },
  {
    title: 'Кластеры Kubernetes',
    description: 'Автомасштабирование и ускорение доставки приложений с Kubernetes как сервис, сертифицированным CNCF',
    icon: '/icons/icon4.svg',
    className: 'kubernetes',
  },
  {
    title: 'Базы данных в облаке',
    description: 'Стабильность работы и высокая доступность управляемых СУБД. Быстрый запуск готового сервиса',
    icon: '/icons/icon5.svg',
    className: 'database',
  },
  {
    title: 'Большие данные',
    description: 'Обработка и анализ больших данных с облачной инфраструктурой на базе Apache Hadoop, Spark, ClickHouse',
    icon: '/icons/2x_servers_img.png',
    className: 'bigdata',
  },
];

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        {services.map((service, index) => (
          <div key={index} className={`grid-item ${service.className}`}>
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </div>
        ))}
      </div>
      <div className="show-more">
        <a href="#more" className="button">Показать ещё</a>
      </div>
    </div>
  );
}

export default App;
