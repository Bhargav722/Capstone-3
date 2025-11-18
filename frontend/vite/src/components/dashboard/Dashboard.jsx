import { useEffect } from 'react';
import { authAPI } from '../../services/api';

const Dashboard = ({ user, onLogout }) => {
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        await authAPI.getProfile();
      } catch (error) {
        console.error('Error fetching profile:', error);
        if (
          error.message?.includes('Unauthorized') ||
          error.message?.includes('Invalid token')
        ) {
          onLogout();
        }
      }
    };

    fetchUserProfile();
  }, [onLogout]);

  const initials = (user?.name || user?.email || 'U')
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');

  return (
    <main className="dashboard">
      <section className="dashboard-card">
        <header className="dashboard-header">
          <p className="dashboard-badge">FinTrack</p>
          <h1 className="dashboard-title">Welcome, {user?.name || 'friend'}.</h1>
          <p className="dashboard-copy">
            This is your calm space. Keep your focus on the essentials and pick up again
            whenever you're ready.
          </p>
        </header>

        <div className="dashboard-divider" />

        <div className="dashboard-profile">
          <div className="profile-avatar">{initials}</div>
          <div className="profile-meta">
            <p className="profile-name">{user?.name || 'Anonymous user'}</p>
            <p className="profile-email">{user?.email || '—'}</p>
          </div>
          <button className="profile-logout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

