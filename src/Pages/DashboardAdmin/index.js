import React, {useContext} from 'react';
import AuthContext from '../../context/auth';
import {
    Container,
    Menu,
    GiantCardLink,
    Link,
    DashMenuArea,
    ContentArea,
    WrapperAppFunctions
} from './styles';

const DashboardAdmin = () => {
  const { user } = useContext(AuthContext);

  return (
      <Container>
          <DashMenuArea>
            <img src="./user-avatar.svg" alt=""/>
            <p>{user.name}</p>

            <Menu>
                <ul>
                    <li><Link to={`profile/${user._id}`}>Meu Perfil</Link></li>
                    <li><Link to="/search">Clientes</Link></li>
                </ul>
            </Menu>
          </DashMenuArea>
          
          <ContentArea>
              <h3>Bem vindo,</h3>
              <h1>{user.name}</h1>

              <WrapperAppFunctions>
                <GiantCardLink to="/profile">
                    <div>
                        <img src="./user.svg" alt=""/>
                        MEU PERFIL
                    </div>
                </GiantCardLink>
                <GiantCardLink to="/search">
                    <div>
                    <img src="./clients.svg" alt=""/>
                        CLIENTES
                    </div>
                </GiantCardLink>
              </WrapperAppFunctions>
          </ContentArea>
      </Container>
  );
}

export default DashboardAdmin;