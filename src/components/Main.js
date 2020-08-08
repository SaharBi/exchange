import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Main(props) {
    const [money,setMoney] = useState(props.money)
    const [from,setFrom]=useState(4);
    const [fromVal, setFromVal]=useState('dollar');
    const [to,setTo]=useState(4);
    const [toVal, setToVal]=useState('dollar');
    const [num,setNum]=useState();
    const [results, setResults]=useState(props.results);
    const [isShow, setIsShow]=useState(false);

    function handleFromChange(e){
        let value = e.target.value;
        money.forEach(function(i){
            if(i.value.toString() === value){
                setFromVal(i.type);
            }
        })
        setFrom(value);
        
        
    }
    function handleToChange(e){
        let value = e.target.value;
        money.forEach(function(i){
            if(i.value.toString() === value){
                setToVal(i.type);
            }
        })
        setTo(value);
    }
    function handleNumChange(e){
        let value = e.target.value;

        setNum(value);
    }
    function handleStartClick(){
        if(num.length !== 0){
            let result = (from*num)/to;
            setResults([...results, result])
            alert(result)
        }
    }
    function handleViewClick(){
        setIsShow(!isShow);
    }
    function handleXClick(e){
        let value = e.target.value;
            let tempPost=results.filter((element,index)=>(index!==value));
            setResults([...tempPost])

    }
    var exchangeList = '';
    if(isShow){
        exchangeList =                 <div className='row'>
        {results.map((element,i)=>{
            return <div key={i} className='row'>
                <div className='col-8'>
                <label>#{i+1}</label><br />
                <p>From {fromVal} To {toVal}</p><br />
                <p>{num}={element}</p>
                </div>
                <div className='col-4'>
                    <button onClick={handleXClick} value={i}>X</button>
                    </div>
                </div>
        })}
    </div>
    }
    function handleUpdateClick(){
        props.update(money,results);
    }
    return (
        <div className="container App">
        <div className='row'>
          <div className='col-4'></div>
          <div className='box col-4'>
          <h1>Exchange</h1>
          <Form className='row'>
          <Form.Label className='col-3'>From: </Form.Label>
                <Form.Group className='col-4'>
                    <Form.Control as="select" id='fromSelect' onChange={handleFromChange}>
                        {money.map((element,i)=>{
                            return <option key={i} value={element.value}>{element.type}</option>
                        })}
                    </Form.Control>
                </Form.Group>
                <Form.Group className='col-5'>
                    <Form.Control type="number" onChange={handleNumChange}/>
                </Form.Group>
                <Form.Label className='col-3'>To: </Form.Label>
                <Form.Group className='col-4'>
                    <Form.Control as="select" id='fromSelect' onChange={handleToChange}>
                    {money.map((element,i)=>{
                            return <option key={i} value={element.value}>{element.type}</option>
                        })}
                    </Form.Control>
                </Form.Group>
          </Form>
          <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'></div>
                    <div className='col-4'>
                        <button onClick={handleStartClick}>Start</button>
                    </div>
                </div>
                        <br />
                <div className='row'>
                    <div className='col-4'>
                    <Link to='/update'><button className='btns' onClick={handleUpdateClick}>Update</button></Link>
                    </div>
                    <div className='col-4'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com"><button className='btns'>Share On Facebook</button></a>
                    </div>
                    <div className='col-4'>
                        <button className='btns' onClick={handleViewClick}>View Your Exchange list</button>
                    </div>
                </div>
                        {exchangeList}
          </div>
          <div className='col-4'></div>
        </div>
      </div>
    );
}

export default Main;