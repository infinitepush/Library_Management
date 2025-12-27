import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/shared/Card';
import { Button } from '../../components/shared/Button';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-900 p-4">
      <Card className="auth-card p-6">
        <h2 className="text-2xl font-bold text-white mb-1">Welcome</h2>
        <p className="text-sm text-gray-400 mb-6">Choose how you'd like to sign in</p>

        <div className="flex flex-col gap-3">
          <Button variant="primary" onClick={() => navigate('/login/student')}>Student Login</Button>
          <Button variant="secondary" onClick={() => navigate('/login/librarian')}>Librarian Login</Button>
          <Button variant="ghost" onClick={() => navigate('/login/admin')}>Admin Login</Button>
        </div>
      </Card>
    </div>
  );
}
