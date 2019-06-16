import React from 'react';
import './assest/style.css';
import {Table,Button} from 'reactstrap'

const TodoItem = (props) => {
  const {items,deleteItem} = props;
  let length = items.length;
   const ListItem = length ? (
       items.map(item => {
           return(
               <tr>
                   <td>
                       <div key={item.id}>
                           <span>{item.activity}</span>

                       </div>
                   </td>
                   <td>
                       <Button color="danger" onClick={() => deleteItem(item.id)}>Delete</Button>

                   </td>
               </tr>


           )
       })
   ) : (
       <p className="itemParg">There Is No Item To Show</p>
    );



  return(
      <div>
          <Table className="tableStyle">
              <thead>
              <tr>
                  <td><b>Things Want To Do</b></td>
                    <td><b>Action</b></td>
              </tr>
              </thead>
              <tbody>
              {ListItem}
              </tbody>
          </Table>
      </div>
  )
};
export default  TodoItem