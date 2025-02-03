import React, { useState } from 'react';
import { Building2, Calendar, Bell } from 'lucide-react';

const Home = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, text: 'New semester registration open', target: 'both', date: '2024-03-01', status: 'active' },
    { id: 2, text: 'System maintenance scheduled', target: 'colleges', date: '2024-02-28', status: 'inactive' },
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState('');
  const [target, setTarget] = useState('both');
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const organizations = [
    {
      id: 1,
      name: 'Tech Institute',
      students: 450,
      address: '123 Tech Street, Silicon Valley',
      icon: '🏛️',
    },
    {
      id: 2,
      name: 'Digital Academy',
      students: 320,
      address: '456 Digital Avenue, Tech City',
      icon: '🎓',
    },
    {
      id: 3,
      name: 'Innovation College',
      students: 280,
      address: '789 Innovation Road, Future Town',
      icon: '🔬',
    },
  ];

  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    const newId = announcements.length + 1;
    setAnnouncements([
      ...announcements,
      { id: newId, text: newAnnouncement, target, date: new Date().toISOString().split('T')[0], status: 'active' },
    ]);
    setNewAnnouncement('');
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    if (dateFilter && announcement.date !== dateFilter) return false;
    if (statusFilter !== 'all' && announcement.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-blue-100">Manage your educational platform efficiently.</p>
      </div>

      {/* Recently Added Organizations */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recently Added Organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org) => (
            <div key={org.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">{org.icon}</span>
                <div>
                  <h3 className="font-semibold text-lg">{org.name}</h3>
                  <p className="text-sm text-gray-600">{org.students} students</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{org.address}</p>
              <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                Know More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Announcements</h2>
        
        {/* New Announcement Form */}
        <form onSubmit={handleAnnouncementSubmit} className="mb-8">
          <div className="space-y-4">
            <textarea
              value={newAnnouncement}
              onChange={(e) => setNewAnnouncement(e.target.value)}
              placeholder="Write your announcement here..."
              className="w-full p-3 border rounded-lg"
              rows={3}
            />
            <div className="flex gap-4">
              <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="border rounded-lg p-2"
              >
                <option value="both">All</option>
                <option value="colleges">Colleges Only</option>
                <option value="students">Students Only</option>
              </select>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Post Announcement
              </button>
            </div>
          </div>
        </form>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="border rounded-lg p-2"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg p-2"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className={`p-4 rounded-lg border ${
                announcement.status === 'active' ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <p className="font-medium">{announcement.text}</p>
                <span className={`text-sm px-2 py-1 rounded ${
                  announcement.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'
                }`}>
                  {announcement.status}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Target: {announcement.target}</p>
                <p>Date: {announcement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;