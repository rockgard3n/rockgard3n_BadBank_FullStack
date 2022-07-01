function Balance(){
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


  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={logshow ? <NotLoggedIn/> : show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow}/>}
    />
  )

}

function NotLoggedIn(){
  return (<>
    <h5>Please log in to access this feature</h5>
  </>);
}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const ctx = React.useContext(UserContext);  

  function handle(){
    const url = `/account/login/${ctx.email}/${ctx.password}`;
    (async () => {
      var res = await fetch(url)
      var data = await res.json();
      console.log(data.balance);
      props.setStatus(`You have a balance of ${data.balance} dollars`)

    })();
  }

  return (<>

<h3>Welcome {ctx.name}</h3><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}