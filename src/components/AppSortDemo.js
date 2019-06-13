import React, {Component} from 'react'
import '../css/AppSortDemo.css';


class AppSortDemo extends Component {
  state = {
    arrayForSort : [3,2,31,1]
  }

  sortBuble = () =>{
    let arr = this.state.arrayForSort.slice()
    let newData = []

    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[i] < arr[j]) {
          let tmp = arr[i]
          arr[i] = arr[j]
          arr[j] = tmp
          newData.push(arr.slice())
        }
      }   
    }
    
    let index = 0
    const timerId = setInterval(()=>{
      if(index >= newData.length){
        clearInterval(timerId)
      }else{
        this.setState({arrayForSort: newData[index++]})
      }
    }, 500)
  }

  render() {
    return (
      <div className="AppSortDemo">
        <button onClick={this.sortBuble}> Запустить сортировку пузырьком </button>
          <div>
            {
              this.state.arrayForSort.map((item, index) => 
                <div key={index} className="AppSortDemo_SortItem">{item} </div>)
            }
          </div>
      </div>
    );
  }
}

export default AppSortDemo;
