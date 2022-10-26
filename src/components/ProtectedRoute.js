import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';

// protected route ini untuk menjaga agar user hanya bisa mengakses halaman ketika sudah login
// kita juga bikin fungsi kebalikannya, jadi halaman login dan register tidak bisa diakses lagi
// setelah login
const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // kita pakai useEffect untuk menjalankannya pertama kali saat render
  useEffect(() => {
    // kalau masih loading, jangan proses dulu
    if (loading) return;

    // kalau user belum login dan mengakses halaman khusus login, maka arahkan ke login
    if (!user && loginOnly) {
      navigate('/login')
    }

    // kalau user sudah login dan mengakses halaman khusus non login, maka arahkan ke home
    if (user && !loginOnly) {
      navigate('/')
    }

    // jalankan ulang kalau ada perubahan di user/loading
  }, [user, loading])

  return loading ? <>loading...</> : children;
};

export default ProtectedRoute;
