function Deposit(){
  const ctx = React.useContext(UserContext);
  
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  
  const [logshow, setLogshow]         = React.useState(() => {
    if (ctx.logger === true) {
        return false;
    } else {
        return true;
    }
    });
  
  console.log(ctx);

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={logshow ? <NotLoggedIn/> : show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Deposit again
    </button>
  </>);
} 

function NotLoggedIn(){
  return (<>
    <h5>Please log in to access this feature</h5>
  </>);
}

function DepositForm(props){
  //const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);  

  return(<>

    <h3>Welcome {ctx.name}</h3><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        fetch(`/account/update/${ctx.email}/${ctx.password}/${amount}`)
          .then(()=>{
            props.setStatus('');
            props.setShow(false);
            console.log("holy shit this actually worked?");
          })
      }}>Deposit</button>

  </>);
}