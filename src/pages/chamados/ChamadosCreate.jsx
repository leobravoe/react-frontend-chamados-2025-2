import React from 'react'
import { useAuth } from '../../auth/useAuth';
import { Navigate } from 'react-router-dom';

const ChamadosCreate = () => {
  // Estou utilizando nesse componenete as variáveis globais definidas dentro do AuthProvider
  const auth = useAuth();

  // Enquanto ainda está carregando o estado de auth, não decide redirecionar
  if (auth.authLoading) {
    return <p>Carregando usuário...</p>; // ou um spinner bonitinho
  }

  // Se não tiver usuário logado, redireciona declarativamente
  if (!auth.user) {
    return <Navigate to="/usuarios/login" replace />;
  }

  return (
    <div>ChamadosCreate</div>
  )
}

export default ChamadosCreate