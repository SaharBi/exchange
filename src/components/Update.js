import React,{useState} from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Update(props) {
    const [type,setType] = useState();
    const [value,setValue] = useState();
    const [money,setMoney] = useState(props.money);
    const [name,setName] = useState('');

    function handleTypeChange(e){
        let value=e.target.value;
        setType(value);
    }
    function handleValueChange(e){
        let value=e.target.value;
        setValue(value);
    }
    function handleUpdateClick(){
        let c=0;
        for(let i=0;i<type.length;i++){
            if(type[i]<'A' || type[i]>'z'){
                c++;
            }
        }
        if(c!==0){
            alert('Error')
        } else{
        let counter=0;
        for(let i=0;i<money.length;i++){
          if(money[i].type === type){
             money[i].value = value;
                counter++;
                setMoney(money);
            } 
        }
            if(counter===0){
            setMoney([...money,{type:type,value:value}])
            } 
        }
    }
    function handleBackClick(){
        props.back(money);
    }
    return (
        <div className='container App'>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4 box'>
                    <h1>Update</h1>
                    <div className='row'>
                        <div className='col-6'>Type</div>
                        <div className='col-6'>Value</div>
                    </div>
                        {money.map((element,i)=>{
                            return <div className='row' key={i}>
                            <div className="col-6">
                                {element.type}
                            </div>
                            <div className="col-6">
                                {element.value}
                            </div>
                            </div>
                        })}
                            <br />
                            <Form className='row'>
                            <Form.Label className='col-6'>Type: </Form.Label>
                            <Form.Group className='col-6'>
                                <Form.Control type="text" onChange={handleTypeChange} />
                            </Form.Group>
                            </Form>
                            <Form className='row'>
                            <Form.Label className='col-6'>New Value: </Form.Label>
                            <Form.Group className='col-6'>
                                <Form.Control type="number" value={value} onChange={handleValueChange}/>
                            </Form.Group>
                            </Form>
                            <div className='row'>
                                <div className='col-6'><Link to='/'><button onClick={handleBackClick}>Back</button></Link></div>
                                <div className='col-6'><button onClick={handleUpdateClick}>Update</button></div>
                            </div>
                </div>
                <div className='col-4'></div>
            </div>
        </div>
    );
}

export default Update;