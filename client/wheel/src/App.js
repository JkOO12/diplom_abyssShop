import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import NavBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index'
import { check } from './http/userAPI';
import { observer } from 'mobx-react-lite';


const App = observer(() => {
  const { user } = useContext(Context)
  const { basket } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      if (!data) {
        user.setIsAuth(false);
        return;
      }
      console.log(basket)
      console.log(user)
      user.setUser(data)
      user.setIsAuth(true)
      basket.setUserId(data.id)
      basket.loadItemsFromLocalStorage();
    }).finally(() => setLoading(false))


  }, [])

  if (loading) {
    return <Spinner className='spiner-loading' animation={"grow"} />
  }

  return (
    <BrowserRouter>

      <AppRouter />
      <NavBar />
      <Footer/> 
    </BrowserRouter>
  );
});

export default App;
