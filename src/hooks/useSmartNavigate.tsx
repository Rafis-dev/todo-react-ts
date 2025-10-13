import { useNavigate, useLocation } from 'react-router-dom';

export const useSmartNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const smartNavigate = (to: string) => {
    if (location.pathname === to) {
      navigate(to, { replace: true });
    } else {
      navigate(to);
    }
  };

  return smartNavigate;
};
