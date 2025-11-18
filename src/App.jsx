import React, { useState } from 'react';
import { User, Briefcase, Search, Filter, Upload, MapPin, DollarSign, Calendar } from 'lucide-react';

export default function JobPostingWireframe() {
  const [activeView, setActiveView] = useState('job-seeker-profile');

  const views = {
    'job-seeker-profile': <JobSeekerProfile />,
    'employer-post-job': <EmployerPostJob />,
    'job-listing': <JobListing />,
    'database-schema': <DatabaseSchema />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">GOVOKASi</h1>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveView('job-seeker-profile')}
              className={`px-4 py-2 rounded ${activeView === 'job-seeker-profile' ? 'bg-blue-800' : 'bg-blue-500'}`}
            >
              Job Seeker Profile
            </button>
            <button 
              onClick={() => setActiveView('employer-post-job')}
              className={`px-4 py-2 rounded ${activeView === 'employer-post-job' ? 'bg-blue-800' : 'bg-blue-500'}`}
            >
              Post Job (Employer)
            </button>
            <button 
              onClick={() => setActiveView('job-listing')}
              className={`px-4 py-2 rounded ${activeView === 'job-listing' ? 'bg-blue-800' : 'bg-blue-500'}`}
            >
              Job Listings
            </button>
            <button 
              onClick={() => setActiveView('database-schema')}
              className={`px-4 py-2 rounded ${activeView === 'database-schema' ? 'bg-blue-800' : 'bg-blue-500'}`}
            >
              Database Schema
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto p-6">
        {views[activeView]}
      </div>
    </div>
  );
}

function JobSeekerProfile() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <User className="w-6 h-6" />
        Job Seeker Profile (user_profiles)
      </h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name *</label>
          <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Email *</label>
          <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Phone Number</label>
          <input type="tel" placeholder="+62 812 3456 7890" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Location</label>
          <input type="text" placeholder="Jakarta, Indonesia" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-semibold mb-2">Professional Title</label>
          <input type="text" placeholder="Full Stack Developer" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-semibold mb-2">Bio / Summary</label>
          <textarea rows="4" placeholder="Write about your experience..." className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-semibold mb-2">Skills (user_skills)</label>
          <div className="flex gap-2 mb-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            <button className="text-blue-600 text-sm">+ Add Skill</button>
          </div>
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload CV / Resume (user_documents)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center">
            <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
          </div>
        </div>
        
        <div className="col-span-2">
          <button className="bg-blue-600 text-white px-6 py-3 rounded font-semibold w-full">
            Save Profile
          </button>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded text-sm">
        <strong>Database Tables:</strong> user_profiles, user_skills, user_documents
      </div>
    </div>
  );
}

function EmployerPostJob() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Briefcase className="w-6 h-6" />
        Post Job Listing (job_listings)
      </h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-sm font-semibold mb-2">Job Title *</label>
          <input type="text" placeholder="Senior Frontend Developer" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Company Name *</label>
          <input type="text" placeholder="Tech Corp Indonesia" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Job Category *</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>IT & Technology</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Human Resources</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Location *
          </label>
          <input type="text" placeholder="Jakarta, Indonesia" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Job Type</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contract</option>
            <option>Freelance</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            Salary Range (min)
          </label>
          <input type="number" placeholder="8000000" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            Salary Range (max)
          </label>
          <input type="number" placeholder="15000000" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-semibold mb-2">Job Description *</label>
          <textarea rows="6" placeholder="Describe the role, responsibilities, and requirements..." className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm font-semibold mb-2">Required Skills (job_requirements)</label>
          <input type="text" placeholder="React, TypeScript, Node.js" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2 flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Application Deadline
          </label>
          <input type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2">Experience Level</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Entry Level</option>
            <option>Mid Level</option>
            <option>Senior Level</option>
            <option>Lead/Manager</option>
          </select>
        </div>
        
        <div className="col-span-2">
          <button className="bg-green-600 text-white px-6 py-3 rounded font-semibold w-full">
            Publish Job Listing
          </button>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded text-sm">
        <strong>Database Tables:</strong> job_listings, job_requirements, companies
      </div>
    </div>
  );
}

function JobListing() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Search className="w-6 h-6" />
        Job Listings & Search
      </h2>
      
      {/* Search Bar */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="Search jobs by title, skills, or company..." 
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded font-semibold flex items-center gap-2">
          <Search className="w-5 h-5" />
          Search
        </button>
      </div>
      
      {/* Filters */}
      <div className="mb-6 p-4 bg-gray-50 rounded">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters (Query Database)
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm mb-1">Category</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
              <option>All Categories</option>
              <option>IT & Technology</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Location</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
              <option>All Locations</option>
              <option>Jakarta</option>
              <option>Bandung</option>
              <option>Surabaya</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Salary (Min)</label>
            <input type="number" placeholder="0" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm mb-1">Job Type</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
              <option>All Types</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Job Cards */}
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="border border-gray-200 rounded p-5 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-blue-700">Senior Frontend Developer</h3>
                <p className="text-gray-600">Tech Corp Indonesia</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Full Time</span>
            </div>
            
            <div className="flex gap-4 text-sm text-gray-600 mb-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Jakarta
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                Rp 8.000.000 - Rp 15.000.000
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Posted 2 days ago
              </span>
            </div>
            
            <div className="flex gap-2 mb-4">
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">React</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">TypeScript</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">Node.js</span>
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold text-sm">
              Apply Now
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded text-sm">
        <strong>Database Query:</strong> SELECT * FROM job_listings WHERE category = ? AND location = ? AND salary_min >= ? ORDER BY created_at DESC
      </div>
    </div>
  );
}

function DatabaseSchema() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Database Schema (ERD)</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Users Table */}
        <div className="border-2 border-blue-500 rounded p-4 bg-blue-50">
          <h3 className="font-bold text-lg mb-3 text-blue-700">users</h3>
          <div className="space-y-1 text-sm">
            <div><strong>id</strong> INT PRIMARY KEY</div>
            <div>email VARCHAR(255) UNIQUE</div>
            <div>password_hash VARCHAR(255)</div>
            <div>user_type ENUM('job_seeker', 'employer')</div>
            <div>created_at TIMESTAMP</div>
            <div>updated_at TIMESTAMP</div>
          </div>
        </div>
        
        {/* User Profiles Table */}
        <div className="border-2 border-green-500 rounded p-4 bg-green-50">
          <h3 className="font-bold text-lg mb-3 text-green-700">user_profiles</h3>
          <div className="space-y-1 text-sm">
            <div><strong>id</strong> INT PRIMARY KEY</div>
            <div><strong>user_id</strong> INT FOREIGN KEY → users</div>
            <div>full_name VARCHAR(255)</div>
            <div>phone VARCHAR(50)</div>
            <div>location VARCHAR(255)</div>
            <div>professional_title VARCHAR(255)</div>
            <div>bio TEXT</div>
            <div>created_at TIMESTAMP</div>
          </div>
        </div>
        
        {/* User Skills Table */}
        <div className="border-2 border-purple-500 rounded p-4 bg-purple-50">
          <h3 className="font-bold text-lg mb-3 text-purple-700">user_skills</h3>
          <div className="space-y-1 text-sm">
            <div><strong>id</strong> INT PRIMARY KEY</div>
            <div><strong>user_id</strong> INT FOREIGN KEY → users</div>
            <div>skill_name VARCHAR(100)</div>
            <div>proficiency_level VARCHAR(50)</div>
            <div>created_at TIMESTAMP</div>
          </div>
        </div>
        
        {/* User Documents Table */}
        <div className="border-2 border-orange-500 rounded p-4 bg-orange-50">
          <h3 className="font-bold text-lg mb-3 text-orange-700">user_documents</h3>
          <div className="space-y-1 text-sm">
            <div><strong>id</strong> INT PRIMARY KEY</div>
            <div><strong>user_id</strong> INT FOREIGN KEY → users</div>
            <div>document_type VARCHAR(50)</div>
            <div>file_name VARCHAR(255)</div>
            <div>file_url TEXT</div>
            <div>file_size INT</div>
            <div>uploaded_at TIMESTAMP</div>
          </div>
        </div>
        
        {/* Companies Table */}
        <div className="border-2 border-red-500 rounded p-4 bg-red-50">
          <h3 className="font-bold text-lg mb-3 text-red-700">companies</h3>
          <div className="space-y-1 text-sm">
            <div><strong>id</strong> INT PRIMARY KEY</div>
            <div><strong>employer_user_id</strong> INT FOREIGN KEY → users</div>
            <div>company_name VARCHAR(255)</div>
            <div>company_description TEXT</div>
            <div>company_logo_url TEXT</div>
            <div>website VARCHAR(255)</div>
            <div>created_at TIMESTAMP</div>
          </div>
        </div>
        
        {/* Job Listings Table */}
        <div className="border-2 border-indigo-500 rounded p-4 bg-indigo-50">
          <h3 className="font-bold text-lg mb-3 text-indigo-700">job_listings</h3>
          <div className="space-y-1 text-sm">
            <div><strong>id</strong> INT PRIMARY KEY</div>
            <div><strong>company_id</strong> INT FOREIGN KEY → companies</div>
            <div>job_title VARCHAR(255)</div>
            <div>job_description TEXT</div>
            <div>job_category VARCHAR(100)</div>
            <div>location VARCHAR(255)</div>
            <div>job_type VARCHAR(50)</div>
            <div>salary_min DECIMAL</div>
            <div>salary_max DECIMAL</div>
            <div>deadline DATE</div>
            <div>status VARCHAR(50)</div>
            <div>created_at TIMESTAMP</div>
          </div>
        </div>
        
        {/* Job Requirements Table */}
        <div className="border-2 border-yellow-500 rounded p-4 bg-yellow-50">
          <h3 className="font-bold text-lg mb-3 text-yellow-700">job_requirements</h3>
          <div className="space-y-1 text-sm">
            <div><strong>id</strong> INT PRIMARY KEY</div>
            <div><strong>job_id</strong> INT FOREIGN KEY → job_listings</div>
            <div>requirement_type VARCHAR(50)</div>
            <div>requirement_value TEXT</div>
            <div>is_mandatory BOOLEAN</div>
          </div>
        </div>
        
        {/* Applications Table */}
        <div className="border-2 border-pink-500 rounded p-4 bg-pink-50">
          <h3 className="font-bold text-lg mb-3 text-pink-700">applications</h3>
          <div className="space-y-1 text-sm">
            <div><strong>id</strong> INT PRIMARY KEY</div>
            <div><strong>job_id</strong> INT FOREIGN KEY → job_listings</div>
            <div><strong>user_id</strong> INT FOREIGN KEY → users</div>
            <div>cover_letter TEXT</div>
            <div>cv_document_id INT FOREIGN KEY</div>
            <div>status VARCHAR(50)</div>
            <div>applied_at TIMESTAMP</div>
            <div>updated_at TIMESTAMP</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Relationships:</h3>
        <ul className="text-sm space-y-1">
          <li>• users (1) → (1) user_profiles</li>
          <li>• users (1) → (n) user_skills</li>
          <li>• users (1) → (n) user_documents</li>
          <li>• users (1) → (1) companies</li>
          <li>• companies (1) → (n) job_listings</li>
          <li>• job_listings (1) → (n) job_requirements</li>
          <li>• job_listings (1) → (n) applications</li>
          <li>• users (1) → (n) applications</li>
        </ul>
      </div>
    </div>
  );
}
