import React, { useState } from 'react'

import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const CalHeading = ({blok, days, classNames, quicker}) => {

 
    const {Showavailible} = blok
    
  return (
   <div>
     <div className="flex items-center">
        <h2 className="flex-auto text-sm font-semibold text-gray-900">January 2022</h2>
        <button
          type="button"
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm">
        {days?.map((day, dayIdx) => (
          <div key={day.date} className={classNames(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
            <button
              type="button"
              className={classNames(
                day.isSelected && 'text-white',
                !day.isSelected && day.isToday && 'text-indigo-600',
                !day.isSelected && !day.isToday && day.isCurrentMonth && 'text-gray-900',
                !day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-gray-400',
                day.isSelected && day.isToday && 'bg-indigo-600',
                day.isAvailible && Showavailible &&'bg-green-600',
                day.inquicker === quicker.length &&'bg-green-600',
                day.isSelected && !day.isToday && 'bg-gray-900',
                !day.isSelected && 'hover:bg-gray-200',
                (day.isSelected || day.isToday) && 'font-semibold',
                'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
              )}
            >
              <time dateTime={day.date}>{day.date.split('-').pop().replace(/^0/, '')}</time>
            </button>
          </div>
        ))}
      </div>
   </div>
  )
}

export default CalHeading