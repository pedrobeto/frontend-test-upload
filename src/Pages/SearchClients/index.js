import React, { useRef, useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth';
import {
    Container,
    Menu,
    Link,
    DashMenuArea,
    ContentArea,
    WrapperClients,
    SmallCard,
    SearchArea,
    ClientLink
} from './styles';
import api from '../../services/api';

  const SearchClient = () => {
  const formRef = useRef(null);
  const [clients, setClients] = useState([]);
  const { user, setSearchedUser } = useContext(AuthContext);

  useEffect(() => {
      (async () => {
          const { data } = await api.get('/user');
          console.log(data);

          setClients(data);
    })();

  }, []);

  async function handleSearch(data, { reset }) {
    try {
        setClients(data);
        console.log(data);
        reset();
    } catch (err) {
        console.log(err.messages);
        return; 
    }
  }


  return (
      <Container>
          <DashMenuArea>
            <img src="./user-avatar.svg" alt=""/>
            <p>Pedro Beda</p>

            <Menu>
                <ul>
                    <li><Link to="/profile">Meu Perfil</Link></li>
                    <li><Link to="/search">Clientes</Link></li>
                </ul>
            </Menu>
          </DashMenuArea>
          
          <ContentArea>
            <p>Clientes</p>
            <SearchArea>
                <input type="text" placeholder="Buscar" />
                <button type="submit" onSubmit={handleSearch}><img src="./search.svg" alt=""/></button>
            </SearchArea>

            <WrapperClients>
                {clients.map((user) => (
                    <>
                    <SmallCard key={user._id}>
                        <ClientLink to={`profile/${user._id}`}>
                            <img src="./user-avatar.svg" alt=""/>
                            {user.name}
                        </ClientLink>
                    </SmallCard>
                    </>
                ))}
            </WrapperClients>
          </ContentArea>
      </Container>
  );
}

export default SearchClient;