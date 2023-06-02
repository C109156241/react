import { Menu, Image, Container, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from './utils/firebase';
import { useState, useEffect } from 'react';
import LOGO from './img/logo.png';

function Header() {
const [user, setUser] = useState(null);

useEffect(() => {
firebase.auth().onAuthStateChanged((currentUser) => {
setUser(currentUser);
});
}, []);

const options = [
{ text: '數學', value: '1' },
{ text: '英文', value: '2' },
{ text: '國文', value: '3' },
];

return (
<Menu size='massive' style={{ margin: '0 0 60px 0', background: 'black', borderRadius: '0' }}>
<Container>
<Image src={LOGO} as={Link} to="/" style={{ width: '5%' }}></Image>
<Dropdown style={menufont} item text='商品類型' options={options} />
<Menu.Item as={Link} to="/personal" style={menufont}>個人資料</Menu.Item>
<Menu.Item as={Link} to="/cart" style={menufont}>購物車</Menu.Item>
<Menu.Item as={Link} to="/ordered" style={menufont}>訂購頁面</Menu.Item>
<Menu.Item as={Link} to="/history" style={menufont}>購買紀錄</Menu.Item>
</Container>
<Menu.Menu position='right'>
{user ? (
<Menu.Item style={menufont} onClick={() => firebase.auth().signOut()}>登出</Menu.Item>
) : (
<Menu.Item style={menufont} as={Link} to="/signin">註冊/登入</Menu.Item>
)}
</Menu.Menu>
</Menu>
);
}

const menufont = {
fontSize: '25px',
color: 'white',
};

export default Header;