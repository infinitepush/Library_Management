import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { Card } from '../../components/shared/Card';
import { Input } from '../../components/shared/Input';
import { Button } from '../../components/shared/Button';

export default function LibrarianLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      const data = await login(email, password);
      if (data.role !== 'librarian') {
        setError('Account is not a librarian');
        setLoading(false);
        return;
      }
      navigate('/librarian');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-900 p-4">
      <Card className="auth-card p-6">
        <h2 className="text-2xl font-bold text-white mb-1">Librarian Login</h2>
        <p className="text-sm text-gray-400 mb-4">Sign in to manage inventory and requests</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input label="Email" type="email" placeholder="you@library.org" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Password" type="password" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <Button type="submit" variant="primary" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</Button>
        </form>

        <div className="mt-4 text-sm text-gray-400">Need help? Contact the system administrator.</div>
      </Card>
    </div>
  );
}
