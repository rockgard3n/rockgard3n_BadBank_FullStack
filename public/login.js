function Login(){
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState('');    

  const [show, setShow]         = React.useState(() => {
    if (ctx.logger === true) {
        return false;
    } else {
        return true;
    }
});

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}




function LoginMsg(props){
  const ctx = React.useContext(UserContext);

  function logout(){
    //const ctx = React.useContext(UserContext); 
    ctx.name = null;
    ctx.email = null;
    ctx.password = null;
    ctx.balance = null;
    ctx.logger = false;
    console.log(ctx);  
    props.setStatus('');
    props.setShow(true)
    console.log('We are out') 
  }
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={logout}>
        LogOut
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  const ctx = React.useContext(UserContext);  

  function handle(){
    const url = `/account/login/${email}/${password}`;
    (async () => {
      var res = await fetch(url)
      var data = await res.json();
      console.log(data);

      console.log(email, password);
      //console.log("API response password" + data.password);
      if (data === null) {
        console.log('API returned Null')      
        props.setStatus('fail!')      
        return;      
      }
      if (data.password == password) {
        console.log('We are in')  
        ctx.name = data.name;
        ctx.email = data.email;
        ctx.password = data.password;
        ctx.balance = data.balance;
        ctx.logger = true;
        console.log(ctx);  
        props.setStatus('');
        props.setShow(false);
        return;      
      }
      console.log('three')          
      props.setStatus('fail!');    
    })();
    
  }


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
   
  </>);
}