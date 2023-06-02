import {Menu,Form,Container,Message} from 'semantic-ui-react';
import { useState } from 'react';
import firebase from '../utils/firebase';
import {useNavigate} from 'react-router-dom';
import "firebase/auth";
function Signin(){
    const navigate=useNavigate();
    //切換 註冊登入 
    const [activeItem,setActiveItem]=useState('reg');
    const [email,setemail]=useState('');
    const [password,setpass]=useState('');
    const [errorMessage,setErrorMessage]=useState('');
    const [isLoading,setIsloading]=useState(false)
    function onSubmit(){
        setIsloading(true);
        if(activeItem==='reg'){
            console.log(email)
            firebase
            .auth()
            .createUserWithEmailAndPassword(email.trim(),password.trim())
            .then(()=>{
                navigate('/');   
                setIsloading(false); 
            })
            .catch((error)=>{
                setIsloading(false);
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        setErrorMessage("信箱已存在");
                        break;
                    case 'auth/invalid-email':
                        setErrorMessage("信箱格式不正確");
                        break;
                    case 'auth/weak-password':
                        setErrorMessage("密碼強度不足");
                        break;

                    default:
                        break;
                }
            })
        }
        else if(activeItem==='sign'){
            firebase
            .auth()
            .signInWithEmailAndPassword(email.trim(),password.trim())
            .then(()=>{
                navigate('/');
                setIsloading(false);
            })
            .catch((error)=>{
                setIsloading(false);
                switch (error.code) {
                    case 'auth/invalid-email':
                        setErrorMessage("信箱格式不正確");
                        break;
                    case 'auth/user-not-found':
                        setErrorMessage("信箱不存在");
                        break;
                    case 'auth/wrong-password':
                        setErrorMessage("密碼錯誤");
                        break;
                    default:
                        break;
                }
            })
        }
    }
    return (
        <Container>
            <Menu widths={2}>
                {/*註冊按鈕 */}
                <Menu.Item 
                    active={activeItem==='reg'}
                    onClick={()=>{setActiveItem('reg'); setErrorMessage('');}}
                >註冊</Menu.Item>
                {/*登入按鈕 */}
                <Menu.Item 
                active={activeItem==='sign'}
                onClick={()=>{setActiveItem('sign'); setErrorMessage('');}}
                >登入</Menu.Item>
            </Menu>
            <Form onSubmit={onSubmit}>
                <Form.Input label="信箱" value={email} 
                onChange={(e)=>setemail(e.target.value)} 
                placeholder="請輸入信箱"/>
                <Form.Input label="密碼" value={password} 
                onChange={(e)=>setpass(e.target.value)}
                placeholder="請輸入密碼"
                type='password'/>
                {errorMessage && <Message negative>{errorMessage}</Message>}
                <Form.Button loading={isLoading}>
                    {activeItem==='reg' && '註冊'}
                    {activeItem==='sign' && '登入'}
                </Form.Button>
            </Form>
        </Container>
    )
}
export default Signin