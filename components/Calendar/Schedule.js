import React, { useState } from 'react'

import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const Schedule = ({blok, meetings}) => {

  return (
    <section className="mt-12">
    <h2 className="text-base font-semibold leading-6 text-gray-900">
      Schedule for <time dateTime="2022-01-21">January 21, 2022</time>
    </h2>
    <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
      {blok.showexample ? meetings.map((meeting) => (
        <li
          key={meeting.id}
          className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
        >
          <img src={meeting.imageUrl} alt="" className="h-10 w-10 flex-none rounded-full" />
          <div className="flex-auto">
            <p className="text-gray-900">{meeting.name}</p>
            <p className="mt-0.5">
              <time dateTime={meeting.startDatetime}>{meeting.start}</time> -{' '}
              <time dateTime={meeting.endDatetime}>{meeting.end}</time>
            </p>
          </div>
          <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
            <div>
              <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Cancel
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
      )) : null}
    </ol>
  </section>
  )
}

export default Schedule