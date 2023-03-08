import React, { Component } from 'react'
import './index.css'

export class Form extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:' ',
      phNum:'',
      cityTown:'Choose',
      paymentM:['Visa'],
      genderr:'Male',
      feedBack: ''
   }
 }
 handleSubmt =(e)=>{
  e.preventDefault(); 
  alert('Successfully');
  console.log('checkout state', this.state);
}
handleChg =(c)=>{
  const {name,value}=c.target;
  this.setState({
      [name]:value
  })
}
handleCheckBox =(d)=>{
  const {value,checked}=d.target;
  const {paymentM} =this.state;
  if(checked){
  this.setState({
      paymentM:[...paymentM,value]
  })
  }else{
  this.setState({
     paymentM:paymentM.filter((t)=>t !== value)
  })
  }
}
  render() {
    const Gender = [
      {
        id: 1,
        name: "Male",
      },
      {
        id: 2,
        name:"Female",
      },
    
    ];
    const city = [
      { id: 1, value: "Yangon" },
      { id: 2, value: "Mandalay" },
      { id: 3, value: "NayPyiTaw" },
    ];
   const payment =[
    { id: 1, value: "Visa" },
    { id: 2, value: "Master" },
    { id: 3, value: "MPU" },
   ]
   const {name,phNum, cityTown,gerderr,feedBack,paymentM}=this.state;
    return (
      <React.Fragment>
        <form action="">
          
          <div className='form-parent'>
          <h1>Payment Details</h1>
            <div className='form-name'>
            <label htmlFor="">Name:</label> 
            <input type="text" name='name' value={name} onChange={this.handleChg}/> <br />
            
            <label htmlFor="">Phone:</label> 
            <input type="Number" name='phNum' value={phNum} onChange={this.handleChg}/>
            </div>

            <div className='form-select'>
            <p>choose your city:</p>
            <select name="cityTown" id="" value={cityTown} onChange={this.handleChg}>
           
            {
            city.map(r=>(
              <option key={r.id}>{r.value}</option>
            ))
           }
          
            </select>
            </div>
            <div className='form-Gender'>
              <p>What is your Gender:</p>
             {
              Gender.map((e)=>(
                <div>
                 <input type="radio" value={e.name} name='genderr' defaultChecked ={gerderr && e.name === gerderr} onChange={this.handleChg}/> <label htmlFor="">{e.name}</label>
            </div>
              ))
             }
            </div>
           
            <div className='textArea'>
              <p>You can feedback:</p>
              <textarea name="feedBack" value={feedBack} id="" cols="30" rows="10" onChange={this.handleChg}></textarea>
              </div>
             <div className='Payment'>
              <p>Wnat would you like to pay with!</p>
              {
                payment.map((x)=>(
                     <div key={x.id}>
                     <input type="checkbox" name='paymentM' value={x.value} onChange={this.handleCheckBox} defaultChecked={paymentM && paymentM.includes(x.value)}/> <label htmlFor="" >{x.value}</label>
                     </div>
                ))
               
              }
             </div>
            <button type='submit' onClick={this.handleSubmt}>Submit</button>
       
            </div> 
        </form>
      </React.Fragment>
    )
  }
}

export default Form