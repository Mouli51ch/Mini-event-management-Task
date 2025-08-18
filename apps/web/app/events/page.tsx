'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Event type definition
interface Event {
  id: string
  name: string
  date: string
}

export default function EventsPage() {
  // State management using useState as requested
  const [events, setEvents] = useState<Event[]>([])
  const [eventName, setEventName] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Load events from localStorage on component mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('events')
    if (savedEvents) {
      try {
        setEvents(JSON.parse(savedEvents))
      } catch (error) {
        console.error('Error loading events from localStorage:', error)
      }
    }
  }, [])

  // Save events to localStorage whenever events state changes
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!eventName.trim() || !eventDate) {
      alert('Please fill in both event name and date')
      return
    }

    const newEvent: Event = {
      id: Date.now().toString(), // Simple ID generation
      name: eventName.trim(),
      date: eventDate
    }

    setEvents(prev => [...prev, newEvent])
    setEventName('')
    setEventDate('')
  }

  // Handle event deletion
  const handleDelete = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id))
  }

  // Filter events based on search term
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Events</h1>
              <p className="text-gray-600 mt-2">Manage your events</p>
            </div>
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Add Event Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Name *
                </label>
                <input
                  type="text"
                  id="eventName"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter event name"
                  required
                />
              </div>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Event
            </button>
          </form>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Events</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search events by name..."
          />
        </div>

        {/* Events List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Events ({filteredEvents.length})
          </h2>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">
                {searchTerm ? 'No events match your search.' : 'No events yet. Add your first event above!'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredEvents.map((event) => (
                <div 
                  key={event.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{event.name}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="text-red-600 hover:text-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

