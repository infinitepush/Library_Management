import { useState } from 'react';
import { Input, Select } from '../../components/shared/Input';
import { Button } from '../../components/shared/Button';
import { Modal } from '../../components/shared/Modal';
import { StatusBadge } from '../../components/shared/Badge';
import { Search, Filter, BookOpen, User as UserIcon, Calendar } from 'lucide-react';
import { mockBooks } from '../../data/mockData';
import { formatAvailability } from '../../utils/formatters';

export const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [showRequestModal, setShowRequestModal] = useState(false);
  
  const categories = [...new Set(mockBooks.map(b => b.category))];
  
  const filteredBooks = mockBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.isbn.includes(searchQuery);
    const matchesCategory = !selectedCategory || book.category === selectedCategory;
    const matchesStatus = !selectedStatus || book.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  const handleRequestBook = (book) => {
    setSelectedBook(book);
    setShowRequestModal(true);
  };
  
  const handleConfirmRequest = () => {
    // Mock request submission
    alert(`Request submitted for "${selectedBook.title}"`);
    setShowRequestModal(false);
    setSelectedBook(null);
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Book Search</h1>
        <p className="text-gray-400">Search and request books from our collection</p>
      </div>
      
      {/* Search and Filters */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Search by title, author, or ISBN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={Search}
            />
          </div>
          <Select
            placeholder="All Categories"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            options={categories.map(cat => ({ value: cat, label: cat }))}
          />
          <Select
            placeholder="All Status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            options={[
              { value: 'available', label: 'Available' },
              { value: 'issued', label: 'Issued' },
              { value: 'lost', label: 'Lost' }
            ]}
          />
        </div>
      </div>
      
      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400">
          Found {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
        </p>
        <Button variant="ghost" icon={Filter}>
          Advanced Filters
        </Button>
      </div>
      
      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="card hover:border-indigo-500 cursor-pointer group">
            <div className="flex gap-4">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-24 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{book.author}</p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">ISBN: {book.isbn}</p>
                  <p className="text-xs text-gray-500">{book.category} • {book.year}</p>
                  <StatusBadge status={book.status} size="sm" />
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">
                  {formatAvailability(book.availableCopies, book.totalCopies)}
                </span>
              </div>
              <Button
                variant={book.availableCopies > 0 ? 'primary' : 'secondary'}
                size="sm"
                className="w-full"
                onClick={() => handleRequestBook(book)}
              >
                {book.availableCopies > 0 ? 'Request Book' : 'Join Waitlist'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredBooks.length === 0 && (
        <div className="card text-center py-12">
          <BookOpen size={48} className="mx-auto text-gray-600 mb-4" />
          <p className="text-gray-400">No books found matching your criteria</p>
        </div>
      )}
      
      {/* Request Modal */}
      <Modal
        isOpen={showRequestModal}
        onClose={() => setShowRequestModal(false)}
        title="Request Book"
      >
        {selectedBook && (
          <div className="space-y-6">
            <div className="flex gap-4">
              <img
                src={selectedBook.coverImage}
                alt={selectedBook.title}
                className="w-32 h-44 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{selectedBook.title}</h3>
                <p className="text-gray-400 mb-4">{selectedBook.author}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <BookOpen size={16} />
                    <span>{selectedBook.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <UserIcon size={16} />
                    <span>{selectedBook.publisher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{selectedBook.year}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-2">Availability</p>
              <p className="text-white font-medium">
                {formatAvailability(selectedBook.availableCopies, selectedBook.totalCopies)}
              </p>
            </div>
            
            {selectedBook.description && (
              <div>
                <p className="text-sm text-gray-400 mb-2">Description</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedBook.description}
                </p>
              </div>
            )}
            
            <div className="flex gap-3">
              <Button variant="secondary" onClick={() => setShowRequestModal(false)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleConfirmRequest} className="flex-1">
                Confirm Request
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};