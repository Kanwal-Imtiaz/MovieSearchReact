import React from 'react';
import './Header.css';

function Header(props) 
{
	const {title} = props;

	return(
    
 			<table className="titleBar">
                  <tbody>
                    <tr> 
                      <td>
                      <img alt="app icon" src ="icon.png"  width="50"/>
                      </td>

                      <td width="8" />

                      <td>
                        <h1>{title}</h1>
                      </td>
                    </tr>
                  </tbody>
                </table>
   
		 );
}
export default Header;