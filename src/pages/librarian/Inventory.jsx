import { useState } from 'react';
import { Table } from '../../components/shared/Table';
import { Button } from '../../components/shared/Button';
import { Input, Select, TextArea } from '../../components/shared/Input';
import { Modal } from '../../components/shared/Modal';
import { StatusBadge } from '../../components/shared/Badge';
import { Plus, Edit, Trash, BookOpen } from 'lucide-react';
import { mockBooks } from '../../data/mockData';
import { formatAvailability } from '../../utils/formatters';

export const Inventory = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredBooks = mockBooks.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.isbn.includes(searchQuery)
  );
  
  const columns = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'author', label: 'Author', sortable: true },
    { key: 'isbn', label: 'ISBN', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { 
      key: 'availableCopies', 
      label: 'Availability',
      render: (value, row) => formatAvailability(value, row.totalCopies)
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value) => <StatusBadge status={value} />
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            icon={Edit}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedBook(row);
              setShowEditModal(true);
            }}
          />
          <Button
            size="sm"
            variant="ghost"
            icon={Trash}
            onClick={(e) => {
              e.stopPropagation();
              if (confirm('Are you sure you want to delete this book?')) {
                alert('Book deleted (mock)');
              }
            }}
          />
        </div>
      )
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Inventory Management</h1>
          <p className="text-gray-400">Manage your library's book collection</p>
        </div>
        <Button icon={Plus} onClick={() => setShowAddModal(true)}>
          Add New Book
        </Button>
      </div>
      
      {/* Search */}
      <div className="card">
        <Input
          placeholder="Search by title, author, or ISBN..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={BookOpen}
        />
      </div>
      
      {/* Inventory Table */}
      <Table columns={columns} data={filteredBooks} />
      
      {/* Add Book Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Book"
        size="lg"
      >
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          alert('Book added (mock)');
          setShowAddModal(false);
        }}>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Title" required />
            <Input label="Author" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="ISBN" required />
            <Input label="Publisher" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Select
              label="Category"
              options={[
                { value: 'fiction', label: 'Fiction' },
                { value: 'technology', label: 'Technology' },
                { value: 'history', label: 'History' },
                { value: 'science', label: 'Science' }
              ]}
              required
            />
            <Input label="Year" type="number" />
            <Input label="Total Copies" type="number" required />
          </div>
          <TextArea label="Description" rows={3} />
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="secondary" onClick={() => setShowAddModal(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Add Book
            </Button>
          </div>
        </form>
      </Modal>
      
      {/* Edit Book Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedBook(null);
        }}
        title="Edit Book"
        size="lg"
      >
        {selectedBook && (
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            alert('Book updated (mock)');
            setShowEditModal(false);
          }}>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Title" defaultValue={selectedBook.title} required />
              <Input label="Author" defaultValue={selectedBook.author} required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input label="ISBN" defaultValue={selectedBook.isbn} required />
              <Input label="Publisher" defaultValue={selectedBook.publisher} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Select
                label="Category"
                defaultValue={selectedBook.category}
                options={[
                  { value: 'fiction', label: 'Fiction' },
                  { value: 'technology', label: 'Technology' },
                  { value: 'history', label: 'History' },
                  { value: 'science', label: 'Science' }
                ]}
                required
              />
              <Input label="Year" type="number" defaultValue={selectedBook.year} />
              <Input label="Total Copies" type="number" defaultValue={selectedBook.totalCopies} required />
            </div>
            <TextArea label="Description" rows={3} defaultValue={selectedBook.description} />
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="secondary" onClick={() => setShowEditModal(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Update Book
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};