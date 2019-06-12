import React, {Component} from 'react'
import '../css/AppSortDemo.css';


class AppSortDemo extends Component {
  state = {
    arrayForSort : [3,2,3]
  }

  sortBuble = () =>{
    let arr = this.state.arrayForSort
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[i] < arr[j]) {
          let tmp = arr[i]
          arr[i] = arr[j]
          arr[j] = tmp
          this.setState({arrayForSort: arr})
        }
      }   
    }
    console.log(arr)
    this.setState({arrayForSort: arr})
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
