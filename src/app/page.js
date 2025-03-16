'use client';

import { useState, useEffect } from 'react';
import data from '../data/data.json'; // Importa la data desde el archivo JSON
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  const { services, contact, team } = data;
  const [modalOpen, setModalOpen] = useState(null);
  const [activePlans, setActivePlans] = useState('contable');
  const buttonClass = "bg-[#ee3656] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition font-montserrat border-2 border-secondary-500";
  const buttonClassOutline = "bg-transparent border border-2 border-secondary-500 text-secondary-500 px-6 py-2 rounded-full transition font-montserrat";

  useEffect(() => {
    modalOpen ? document.querySelector('body').classList.add('overflow-hidden') : document.querySelector('body').classList.remove('overflow-hidden')
  }, [modalOpen])

  return (
    <main className="pt-32 bg-gray-50">
      {/* Hero Section */}
      <section id="home" className="relative flex flex-col md:flex text-center md:text-left md:items-end md:justify-end shadow-xl">
        
        <div className="md:absolute left-10 top-16 container mx-auto md:mx-0 px-4 md:w-2/5 order-1 z-10">
          <p className="text-lg text-[#005f9e] mb-2">Soluciones Contables a tu Alcance</p>
          <h1 className="text-4xl font-bold mb-4">Transformamos tus finanzas, iluminamos tu contabilidad.</h1>
          <p className="mb-6 text-gray-700">
          En Prisma, ofrecemos soluciones contables personalizadas. Confianza, precisión y experiencia en cada número.
          </p>
          <a href="#planes" className={buttonClass}>
            Conoce Nuestros Planes
          </a>
        </div>
        <img
          src="/hero.png"
          alt="Prisma Contable"
          className="w-auto md:h-auto md:w-4/6 object-contain order-2  md:object-cover"
        />
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="relative py-20 bg-stone-200 md:min-h-[90vh]">
        <img src="/nosotros.jpg" className="absolute top-0 left-0 w-full h-full object-cover hidden md:block opacity-10 filter grayscale-75" />
        <div className='container mx-auto relative z-10'>
          <div className="px-4 mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#005f9e" }}>Nosotros</h2>
            <div className='md:flex justify-center gap-12 max-w-2xl mx-auto'>
              <div className="text-gray-700 mb-6 space-y-4 text-sm">
                <p>En Prisma Contable, nos enfocamos en brindar servicios contables de alta calidad y personalizados para empresas y particulares. Nuestra meta es ayudar a cada cliente a alcanzar sus objetivos financieros y mantenerse en cumplimiento con las normas y regulaciones contables y fiscales.</p>
                <p>Creemos que la contabilidad no es solo un conjunto de números y reglas, sino una herramienta poderosa para tomar decisiones informadas y alcanzar el éxito financiero. Nos enfocamos en entender las necesidades y objetivos de cada cliente y en brindar servicios personalizados y efectivos.</p>
              </div>
              <div className="text-gray-700 mb-6 space-y-4 text-sm">
                <p>Nuestro Equipo de profesionales altamente capacitados y experimentados en contabilidad y finanzas está comprometido con la excelencia y la atención al detalle, y se esfuerza por brindar servicios de alta calidad.</p>
                <p>En Prisma Contable, nos guiamos por valores que nos permiten brindar servicios de excelencia a nuestros clientes.</p>
              </div>
            </div>
            <div className="flex space-x-4 justify-center">
              <a href="#servicios" className={buttonClass}>Ver Servicios</a>
              <a href="#contacto" className={buttonClassOutline}>Contáctanos</a>
            </div>
          </div>
          <div className='flex flex-col md:flex-row px-4 justify-center md:gap-12'>
            <div className='rounded-full bg-white md:w-1/3 aspect-square max-w-[220px] md:max-w-[280px] text-center space-y-4 flex flex-col items-center justify-center shadow-2xl'>
              <span className='text-6xl font-bold text-secondary-500'>+17</span>
              <p className='text-xs text-primary-500 font-semibold'>Años de Experiencia</p>
            </div>
            <div className='rounded-full bg-white md:w-1/3 aspect-square max-w-[220px] md:max-w-[280px] text-center space-y-4 flex flex-col items-center justify-center shadow-2xl self-end p-8'>
              <span className='text-6xl font-bold text-secondary-500'>+1000</span>
              <p className='text-xs text-primary-500 font-semibold'>Casos de éxito</p>
            </div>
            <div className='rounded-full bg-white md:w-1/3 aspect-square max-w-[220px] md:max-w-[280px] text-center space-y-4 flex flex-col items-center justify-center shadow-2xl'>
              <span className='text-6xl font-bold text-secondary-500'>+300</span>
              <p className='text-xs text-primary-500 font-semibold'>Empresas registradas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section id="planes" className="py-20 bg-[url(/spiral.png)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#005f9e" }}>Soluciones Contables</h2>
          <ul className='flex justify-center mb-10'>
            <li
              className={`${activePlans === 'contable' ? 'border-secondary-500 cursor-default' : 'border-transparent cursor-pointer'} border-b-4 py-2 px-2 text-primary-500 font-semibold uppercase font-montserrat text-sm`}
              onClick={() => setActivePlans('contable')}
            >
              Planes Contables
            </li>
            <li
              className={`${activePlans === 'juridico' ? 'border-secondary-500 cursor-default' : 'border-transparent cursor-pointer'} border-b-4 py-2 px-2 font-semibold text-primary-500 uppercase font-montserrat text-sm`}
              onClick={() => setActivePlans('juridico')}
            >
              Planes Jurídicos
            </li>
          </ul>

          <div className="container mx-auto grid md:grid-cols-3 gap-12">
            {data[`planes-${activePlans}`].map((plan, idx) => (
              <div key={plan.id} className="p-6 pb-10 bg-white shadow-xl rounded-xl transition transform hover:scale-105 text-center border-t-4 border-primary-500">
                <h3 className="text-2xl font-bold mb-4 uppercase text-primary-500 font-montserrat">{plan.name}</h3>
                <ul className="list-inside text-left md:min-h-[180px] mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className={`text-gray-600 text-sm border-dotted border-primary-200 py-2 ${idx > 0 && index === 0 ? 'font-semibold border-0' : 'border-b'}`}>{feature}</li>
                  ))}
                </ul>
                <div className="mb-6 flex gap-6 justify-center">
                  {Object.entries(plan.pricing).map(([key, price]) => (
                    <div key={key} className='flex flex-col justify-center'>
                      <span className='text-2xl font-bold text-primary-500'>{price}</span>
                      <p className="text-gray-700 text-xs">{key}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola, me interesa contratar tu plan ${activePlans} ${plan.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  Contratar Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-[url(/servicios.jpg)] bg-cover">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map(service => (
              <div
                key={service.id}
                className="p-4 bg-white shadow rounded-sm border-l-4 border-primary-500 transition transform hover:scale-105 cursor-pointer flex justify-between"
                onClick={() => setModalOpen(service.id)}
              >
                <h3 className="md:text-lg font-semibold mb-0 text-primary-500">{service.title}</h3>
                <p className="text-gray-300">REF: <span className='text-primary-500'>{service.shortDesc}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para detalles de servicio */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,.75)] z-50 p-4"
          onClick={() => setModalOpen(null)}
        >
          <div className="relative bg-white p-6 rounded shadow-lg max-w-lg w-full" onClick={e => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-secondary-500 hover:text-secondary-700" onClick={() => setModalOpen(null)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {services.filter(service => service.id === modalOpen).map(service => (
          <div key={service.id}>
            <h3 className="text-lg md:text-2xl font-bold mb-4 text-primary-500">{service.title}</h3>
            <p className="mb-4 text-gray-700">{service.detailedDesc}</p>
            <a
          href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola, me interesa contratar tu servicio de ${service.title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
            >
              Contratar Servicio
            </a>
          </div>
        ))}
          </div>
        </div>
      )}

      {/* Equipo Section */}
      {/* <section id="equipo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#005f9e" }}>Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 shadow rounded">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600"><strong>{member.role}</strong>. {member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contacto Section */}
      <section id="contacto" className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#005f9e" }}>Contacto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <di className="md:pr-10">
              <p className="mb-4 flex space-x-2 items-center"><FaMapMarkerAlt className="text-secondary-500" /> <span>{contact.address}</span></p>
              <p className="mb-4 flex space-x-2 items-center"><MdEmail className="text-secondary-500" />
                <a
                  href={`mailto:${contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500"
                >
                  {contact.email}
                </a>
              </p>
              <p className="mb-4 flex space-x-2 items-center">
                <FaWhatsapp className="text-secondary-500" />{" "}
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500"
                >
                  {contact.whatsapp}
                </a>
              </p>
              <form
                className='mb-10 p-6 bg-stone-100 rounded-lg'
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const message = e.target.message.value;
                  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Nombre:%20${encodeURIComponent(
                    name
                  )}%0AEmail:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                <div className="mb-4">
                  <input type="text" name="name" placeholder="Nombre" className="w-full p-3 border-b-2 bg-white border-primary-500 focus:outline-0 focus:border-secondary-500 transition-all" required />
                </div>
                <div className="mb-4">
                  <input type="email" name="email" placeholder="Email" className="w-full p-3 border-b-2 bg-white border-primary-500 focus:outline-0 focus:border-secondary-500 transition-all" required />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    className="w-full p-3 border-b-2 bg-white border-primary-500 focus:outline-0 focus:border-secondary-500 transition-all"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className={buttonClass}>
                  Enviar Consulta
                </button>
              </form>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3572.8416896526965!2d-66.81806601708706!3d10.476064891161835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sve!4v1742094377081!5m2!1ses-419!2sve"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
              ></iframe>
            </di>
            <div className='absolute hidden md:block left-1/2 top-0 bottom-0 w-1/2'>
                <img src="/contacto.jpg" className='absolute left-0 top-0 w-full h-full object-cover' />                
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
