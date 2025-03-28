"use client"

import React, { useState } from 'react'
import Button from '../common/Button';
import { SERVICES } from '@/app/utils/constant';
import { useSearchParams } from 'next/navigation';

export default function ContactUsForm() {
  const searchParams = useSearchParams()

  const getInquiry = () => {
    const inquiry = searchParams.get('inquiry')
    if (inquiry) {
      let serviceDetail = SERVICES.find((service) => {
        if (service.name === inquiry) {
          return service
        }
      })

      if (!serviceDetail) {
        return SERVICES[0].name
      }

      return inquiry
    }

    return SERVICES[0].name
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: getInquiry(),
    projectDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border-none rounded-md bg-[#9690a214] focus:bg-[#9690a226] min-h-[3rem] outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border-none rounded-md bg-[#9690a214] focus:bg-[#9690a226] min-h-[3rem] outline-none"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border-none rounded-md bg-[#9690a214] focus:bg-[#9690a226] min-h-[3rem] outline-none"
          />
        </div>
        <div>
          <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">Inquiry *</label>
          <select
            id="inquiry"
            name="inquiry"
            required
            value={formData.inquiry}
            onChange={handleChange}
            className="w-full p-2 border-none rounded-md bg-[#9690a214] dark:text-white focus:bg-[#9690a226] min-h-[3rem] outline-none"
          >
            {
              SERVICES.map((service, index) => (
                <option key={index} value={service.name} className='bg-white dark:bg-black'>{service.name}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">Project details</label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows="4"
          value={formData.projectDetails}
          onChange={handleChange}
          placeholder="Brief project details"
          className="w-full p-4 border-none rounded-md bg-[#9690a214] focus:bg-[#9690a226] min-h-[3rem] outline-none"
        ></textarea>
      </div>
      <Button type="submit" className="dark:bg-[#9690a240] bg-blackButton text-white px-4 py-3 rounded-md hover:bg-gray-800 transition-colors">
        Reach Out
      </Button>
    </form>
  )
}
