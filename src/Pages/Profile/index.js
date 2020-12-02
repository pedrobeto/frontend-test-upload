import React, { useRef, useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth';
import {
    Container,
    Menu,
    Link,
    DashMenuArea,
    ContentArea,
    ProfileCard,
    BackArea,
    TextArea,
} from './styles';
import api from '../../services/api';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userSearched, setUserSearched] = useState(null);

  useEffect(() => {
    async function loadStorageData() {

    const { data } = await api.get(`/user/${user._id}`);
        const x = data;
        setUserSearched(x);
    }

    loadStorageData();
    }, []);

  return (
      <Container>
          <DashMenuArea>
            <img src="./user-avatar.svg" alt="user_avatar"/>
            <p>{user.name}</p>

            <Menu>
                <ul>
                    <li><Link to="/profile">Meu Perfil</Link></li>
                    <li><Link to="/search">Clientes</Link></li>
                </ul>
            </Menu>
          </DashMenuArea>
          
          <ContentArea>
            <p>perfil</p>
            {userSearched && 
                <ProfileCard key={user._id}>
                <img src="./user-avatar.svg" alt="user_avatar"/>
                <TextArea>
                    <p><strong>Nome: </strong>{userSearched.name}</p>
                    <p><strong>RG: </strong>{userSearched.rg}</p>
                    <p><strong>CPF: </strong>{userSearched.cpf}</p>
                    <p><strong>Data de nascimento: </strong>{userSearched.bornDate}</p>
                    <p><strong>Email: </strong>{userSearched.email}</p>
                    <p><strong>Telefone: </strong>{userSearched.firstTelephone}</p>
                    <p><strong>Telefone secundário: </strong>{userSearched.secondTelephone}</p>
                </TextArea>
            </ProfileCard>
            }

            <BackArea><Link>VOLTAR</Link></BackArea>
          </ContentArea>
      </Container>
  );
}

export default Profile;